const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  tipoCozinha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;
