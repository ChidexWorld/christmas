// app.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS for all routes

// Middleware to parse incoming JSON data
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Update if your MySQL is on a different host
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "christmas", // Database you created
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected");
  }
});

// Route to send an email
app.post("/send", (req, res) => {
  const { recipient, message } = req.body;
  console.log({ recipient, message });

  if (recipient === "" || message === "") res.sendStatus(400);

  res.status(200).send({ message: "Message Sent" });
});

// Route to send an email
app.post("/send-email", async (req, res) => {
  const { recipient, message } = req.body;

  if (recipient == "" || message == "") res.sendStatus(400);

  const subject = "Christmas wish";

  try {
    // Step 1: Configure the transport object
    let transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail service or any other (e.g., Yahoo, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });

    // Step 2: Email details
    let mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: recipient, // List of recipients (e.g., "test@example.com")
      subject: subject, // Subject line
      text: message, // Plain text body
    };

    // Step 3: Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    // Save email data to MySQL
    const sql =
      "INSERT INTO emailDB (sender_address, receiver_address,subject, message) VALUES (?, ?, ?,?)";
    db.query(
      sql,
      [process.env.EMAIL_USER, recipient, subject, message],
      (err, result) => {
        if (err) {
          console.error("Error saving to database:", err);
          return res.status(500).json({ error: "Failed to save email data" });
        }
        res.status(200).json({ message: "Message Sent!" });
        console.log("successfully added to the database");
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
