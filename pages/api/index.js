const express = require("express");
const router = express.Router();

const { google } = require("googleapis");
const nodemailer = require("nodemailer");

router.post("/sendEmail", async (req, res) => {
  const { name, email, phone, message } = req.body;
  contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
    process.env.REFRESH_TOKEN
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const accessToken = await oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
    tls: true,
  });

  const info = await transporter.sendMail({
    from: `My Website Contact <${email}>`,
    to: "camiaraquecaro17@gmail.com",
    subject: "My Portfolio Contact Form",
    html: contentHTML,
  });

  console.log("Message Sent", info.messageId);

  res.redirect("/");
});

module.exports = router;
