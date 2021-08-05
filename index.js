const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
app.use(express.json());

// Hashear la contraseña
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('admin', salt);
// Datos de usuario
const testUser = {
  name: 'eze',
  password: hash,
};

app.post('/login', async (req, res) => {
  const {name, password} = req.body;

  if (
    name === testUser.name &&
    bcrypt.compareSync(password, testUser.password)
  ) {
    const token = jwt.sign(
      {
        name,
        password: testUser.password,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      ok: true,
      msg: 'Correcto!',
      token,
    });
  }
  res.status(400).send('Datos incorrectos');
});

app.get('/saludo', (req, res) => {
  if (req.body) {
    const {name} = jwt.decode(req.body.token);
    res.status(200).send(`Hola ${name}!`);
  }
  res.status(400).send('Error de solicitud');
});

app.listen(3000, console.log('Listo!'));
