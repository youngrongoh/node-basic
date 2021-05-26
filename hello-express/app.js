const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 5000;

nunjucks.configure('template', {
  autoescape: true, // XSS를 막기 위해 true로 설정
  express: app,
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('hello express');
});

function vipMiddleware(req, res, next) {
  console.log('최우선 미들웨어');
  next();
}

app.use('/admin', vipMiddleware, admin);

app.use('/contacts', contacts);

app.listen(port, () => {
  console.log('Express listening on port', port);
});
