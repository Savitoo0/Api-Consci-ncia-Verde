const express = require('express');
const router = express.Router();
const controller = require('../View/conteudoController');

router.get('/', controller.getTodos);
router.get('/:id', controller.getPorId);
router.post('/:id/curtir', controller.curtir);
router.post('/:id/comentar', controller.comentar);
router.get('/:id/comentarios', controller.getComentarios);

module.exports = router;
