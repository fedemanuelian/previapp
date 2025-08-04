const db = require("../db/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: "Error al hashear contraseña" });

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.run(sql, [name, email, hashedPassword], function (err) {
      if (err) return res.status(400).json({ error: "Usuario ya existe" });

      return res.status(201).json({ message: "Usuario registrado correctamente" });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.get(sql, [email], (err, user) => {
    if (err || !user) return res.status(400).json({ error: "Usuario no encontrado" });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

      const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({ token });
    });
  });
};

module.exports = { register, login };
