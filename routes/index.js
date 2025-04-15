const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/sobre', (req, res) => {
  res.render('pages/sobre');
});

router.get('/projetos', (req, res) => {
    res.render('pages/projetos');
});

router.get('/contato', (req, res) => {
  res.render('pages/contato');
});


module.exports = router;
