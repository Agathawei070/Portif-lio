const express = require('express');
const router = express.Router();
const transporter = require('nodemailer')

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/sobre', (req, res) => {
  res.render('pages/sobre');
});

router.get('/projetos', (req, res) => {
    res.render('projetos');
});

router.get('/contato', (req, res) => {
  res.render('pages/contato');
});


router.get('/curriculo', (req, res) => {
  res.render('pages/curriculo');
});

router.get('/certificacoes', (req, res) => {
  res.render('certificacoes');
});

module.exports = router;
