const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/projetos.json');
  const projetos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  res.render('projetos', { projetos });
});

module.exports = router;
