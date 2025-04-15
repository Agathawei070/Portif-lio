meu-portfolio/
│
├── public/                   # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── (imagens dos projetos, perfil etc.)
│
├── views/                    # Templates EJS
│   ├── partials/             # Cabeçalho, rodapé etc.
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── pages/                # Páginas principais
│   │   ├── home.ejs
│   │   ├── sobre.ejs
│   │   └── contato.ejs
│   └── projetos.ejs          # Lista ou detalhes de projetos
│
├── routes/                   # Rotas da aplicação
│   ├── index.js              # Rota principal
│   └── projetos.js           # Rota dos projetos
│
├── data/                     # Dados dos projetos (pode ser mock JSON)
│   └── projetos.json
│
├── server.js                 # Arquivo principal do servidor
├── package.json
└── README.md
