const express = require('express');
const router = express.Router();
const { obterItemMenu, obterItensMenu, criarItemMenu, atualizarItemMenu, deletarItemMenu } = require('../controladores/itemMenuControlador');

router.get('/', obterItensMenu);
router.get('/:id', obterItemMenu);
router.post('/', criarItemMenu);
router.put('/:id', atualizarItemMenu);
router.delete('/:id', deletarItemMenu);

module.exports = router;
