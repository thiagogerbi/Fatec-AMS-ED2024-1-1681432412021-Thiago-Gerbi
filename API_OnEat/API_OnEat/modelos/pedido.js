const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: true,
  },
  enderecoCliente: {
    type: String,
    required: true,
  },
  itens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ItemMenu',
      required: true,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pendente',
  },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
