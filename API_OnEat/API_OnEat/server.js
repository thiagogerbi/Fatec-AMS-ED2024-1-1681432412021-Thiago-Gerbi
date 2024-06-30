const express = require('express');
const mongoose = require('mongoose');
const restauranteRotas = require('./rotas/restauranteRotas');
const itemMenuRotas = require('./rotas/itemMenuRotas');
const pedidoRotas = require('./rotas/pedidoRotas');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Não foi possível conectar ao MongoDB...', err));

app.use('/restaurantes', restauranteRotas);
app.use('/itensMenu', itemMenuRotas);
app.use('/pedidos', pedidoRotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
