const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
  res.render('admin/products.html', {
    message: 'hello!!!!',
    online: '<h1>express</h1>',
  });
});

module.exports = router;
