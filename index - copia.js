const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 3000;



app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Datos recibidos:", email, password);

  if (email === 'admin@previapp.com' && password === '1234') {
    res.json({ success: true, message: 'Login exitoso' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});