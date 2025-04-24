const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5405;

const conteudoRoutes = require('./Routes/conteudoRoutes');
const listaRoutes = require('./Routes/listaRoutes');

app.use(bodyParser.json());

app.use('/conteudos', conteudoRoutes);
app.use('/listas', listaRoutes);

app.listen(PORT, () => {
    console.log(`API Consciência Verde rodando em http://localhost:${PORT}`);
});
