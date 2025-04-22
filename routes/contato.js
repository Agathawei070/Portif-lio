const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('contato', { enviado: false, erro: false });
  });
  

  router.post('/', async (req, res) => {
    const { nome, email, mensagem } = req.body;});
  