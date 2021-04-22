const express = require("express");
const next = require("next");
const cors = require("cors");
const port = process.env.NEXT_PUBLIC_NODE_PORT || 3000;
const dev = process.env.NEXT_PUBLIC_NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const sendEmail = require("../pages/api/sendEmail");
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    server.use("/api", cors(), sendEmail);

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
