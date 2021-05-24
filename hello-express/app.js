const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hello express');
})

app.get('/login', (req, res) => {
  res.send('loin page');
})

app.listen(port, () => {
  console.log('Express listening on port', port);
})