const express = require("express");
const next = require("next");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const sendEmail = require("./routes/index");
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    server.use(cors());
    server.use("/api", sendEmail);

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