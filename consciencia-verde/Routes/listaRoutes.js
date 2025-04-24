const express = require('express');
const router = express.Router();
const controller = require('../View/listaController');

router.post('/', controller.criarLista);
router.post('/:id/adicionar/:conteudoId', controller.adicionarConteudo);
router.get('/:id', controller.getLista);

module.exports = router;
