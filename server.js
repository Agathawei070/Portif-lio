const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index');
const projetosRoutes = require('./routes/projetos');
const contatoRoutes = require('./routes/contato');

const app = express();
const PORT = process.env.PORT || 3000;


// Configura EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRoutes);
app.use('/projetos', projetosRoutes);
app.use(express.static('public'));



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
