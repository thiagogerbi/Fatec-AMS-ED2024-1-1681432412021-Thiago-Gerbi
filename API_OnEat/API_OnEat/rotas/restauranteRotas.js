const express = require('express');
const router = express.Router();
const { obterRestaurante, obterRestaurantes, criarRestaurante, atualizarRestaurante, deletarRestaurante } = require('../controladores/restauranteControlador');

router.get('/', obterRestaurantes);
router.get('/:id', obterRestaurante);
router.post('/', criarRestaurante);
router.put('/:id', atualizarRestaurante);
router.delete('/:id', deletarRestaurante);

module.exports = router;
