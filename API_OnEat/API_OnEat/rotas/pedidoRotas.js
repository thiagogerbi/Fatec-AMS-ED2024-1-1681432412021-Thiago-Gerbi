const express = require('express');
const router = express.Router();
const { obterPedido, obterPedidos, criarPedido, atualizarPedido, deletarPedido } = require('../controladores/pedidoControlador');

router.get('/', obterPedidos);
router.get('/:id', obterPedido);
router.post('/', criarPedido);
router.put('/:id', atualizarPedido);
router.delete('/:id', deletarPedido);

module.exports = router;
