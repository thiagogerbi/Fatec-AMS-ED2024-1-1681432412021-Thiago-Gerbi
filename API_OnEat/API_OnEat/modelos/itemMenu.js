const mongoose = require('mongoose');

const itemMenuSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  restaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true,
  },
});

const ItemMenu = mongoose.model('ItemMenu', itemMenuSchema);

module.exports = ItemMenu;
