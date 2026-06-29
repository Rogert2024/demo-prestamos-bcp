const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>BCP - Demo PaaS</h1><p>Esta app se desplegó sin administrar ningún servidor.</p>');
});

app.listen(PORT, () => {
  console.log('Servidor activo en el puerto ' + PORT);
});
