const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', {
    title: 'flex'
  });
});

router.get('/contact', (req, res) => {
  res.render('inline-flex.html', {
    title: 'inline-flex'
  });
});

module.exports = router;
