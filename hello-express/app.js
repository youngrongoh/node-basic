const express = require('express');
const nunjucks = require('nunjucks');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 5000;

nunjucks.configure('template', {
  autoescape: true, // XSS를 막기 위해 true로 설정
  express: app,
});

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/admin', admin);

app.use('/contacts', contacts);

app.listen(port, () => {
  console.log('Express listening on port', port);
});
