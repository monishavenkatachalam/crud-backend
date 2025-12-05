const db = require("../models/db");
const { sendMail } = require("../utils/mailer");

exports.addUser = (req, res) => {
  const { name, email, location } = req.body;
  
  db.query("INSERT INTO users (name, email, location) VALUES (?, ?, ?)",
    [name, email, location],
    async (err, result) => {
      if (err) res.status(500).send(err);
      else {
        await sendMail(email, "Welcome!", `Hello ${name}, your account has been created.`);
        res.json({ message: "User Added", id: result.insertId });
      }
    }
  );
};

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.updateUser = (req, res) => {
  const { name, email, location } = req.body;

  db.query("UPDATE users SET name=?, email=?, location=? WHERE id=?",
    [name, email, location, req.params.id],
    (err) => {
      if (err) res.status(500).send(err);
      else res.json({ message: "User Updated" });
    }
  );
};

exports.deleteUser = (req, res) => {
  db.query("DELETE FROM users WHERE id=?", req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "User Deleted" });
  });
};
