const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('contacts');
});

router.get('/list', (req, res) => {
  res.send('contact list');
});

module.exports = router;
