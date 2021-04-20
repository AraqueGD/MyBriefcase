const express = require("express");
const next = require("next");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

var whitelist = [
  "https://my-briefcase-six.vercel.app",
  "https://my-briefcase-git-master-araquegd.vercel.app",
  "https://my-briefcase-araquegd.vercel.app",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app
  .prepare()
  .then(() => {
    const server = express();
    const sendEmail = require("./routes/index");
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    server.use("/api", cors(corsOptions), sendEmail);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
