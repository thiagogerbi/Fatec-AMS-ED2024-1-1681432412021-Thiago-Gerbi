const Pedido = require('../modelos/pedido');

async function obterPedidos(req, res) {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function obterPedido(req, res) {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (pedido == null) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function criarPedido(req, res) {
  const pedido = new Pedido({
    nomeCliente: req.body.nomeCliente,
    enderecoCliente: req.body.enderecoCliente,
    itens: req.body.itens,
    total: req.body.total,
    status: req.body.status,
  });

  try {
    const novoPedido = await pedido.save();
    res.status(201).json(novoPedido);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function atualizarPedido(req, res) {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (pedido == null) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    if (req.body.nomeCliente != null) {
      pedido.nomeCliente = req.body.nomeCliente;
    }
    if (req.body.enderecoCliente != null) {
      pedido.enderecoCliente = req.body.enderecoCliente;
    }
    if (req.body.itens != null) {
      pedido.itens = req.body.itens;
    }
    if (req.body.total != null) {
      pedido.total = req.body.total;
    }
    if (req.body.status != null) {
      pedido.status = req.body.status;
    }

    const pedidoAtualizado = await pedido.save();
    res.json(pedidoAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deletarPedido(req, res) {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (pedido == null) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    await pedido.deleteOne();
    res.json({ message: 'Pedido excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  obterPedidos,
  obterPedido,
  criarPedido,
  atualizarPedido,
  deletarPedido,
};
