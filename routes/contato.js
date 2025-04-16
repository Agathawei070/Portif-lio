const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');



router.get('/', (req, res) => {
    res.render('contato', { enviado: false, erro: false });
  });
  

  router.post('/', async (req, res) => {
    const { nome, email, mensagem } = req.body;
  
    try {
      // lógica para enviar e-mail com Nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_DESTINO,
        subject: 'Nova mensagem do portfólio',
        html: `
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${mensagem}</p>
        `,
      });
  
      res.render('contato', { enviado: true, erro: false });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.render('contato', { enviado: false, erro: true });
    }
  });
  