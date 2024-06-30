const ItemMenu = require('../modelos/itemMenu');

async function obterItensMenu(req, res) {
  try {
    const itensMenu = await ItemMenu.find();
    res.json(itensMenu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function obterItemMenu(req, res) {
  try {
    const itemMenu = await ItemMenu.findById(req.params.id);
    if (itemMenu == null) {
      return res.status(404).json({ message: 'Item de menu não encontrado' });
    }
    res.json(itemMenu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function criarItemMenu(req, res) {
  const itemMenu = new ItemMenu({
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    restaurante: req.body.restaurante,
  });

  try {
    const novoItemMenu = await itemMenu.save();
    res.status(201).json(novoItemMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function atualizarItemMenu(req, res) {
  try {
    const itemMenu = await ItemMenu.findById(req.params.id);
    if (itemMenu == null) {
      return res.status(404).json({ message: 'Item de menu não encontrado' });
    }

    if (req.body.nome != null) {
      itemMenu.nome = req.body.nome;
    }
    if (req.body.descricao != null) {
      itemMenu.descricao = req.body.descricao;
    }
    if (req.body.preco != null) {
      itemMenu.preco = req.body.preco;
    }
    if (req.body.restaurante != null) {
      itemMenu.restaurante = req.body.restaurante;
    }

    const itemMenuAtualizado = await itemMenu.save();
    res.json(itemMenuAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deletarItemMenu(req, res) {
  try {
    const itemMenu = await ItemMenu.findById(req.params.id);
    if (itemMenu == null) {
      return res.status(404).json({ message: 'Item de menu não encontrado' });
    }
    await itemMenu.deleteOne();
    res.json({ message: 'Item de menu excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  obterItensMenu,
  obterItemMenu,
  criarItemMenu,
  atualizarItemMenu,
  deletarItemMenu,
};
