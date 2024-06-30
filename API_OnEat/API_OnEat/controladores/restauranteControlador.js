const Restaurante = require('../modelos/restaurante');

async function obterRestaurantes(req, res) {
  try {
    const restaurantes = await Restaurante.find();
    res.json(restaurantes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function obterRestaurante(req, res) {
  try {
    const restaurante = await Restaurante.findById(req.params.id);
    if (restaurante == null) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }
    res.json(restaurante);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function criarRestaurante(req, res) {
  const restaurante = new Restaurante({
    nome: req.body.nome,
    endereco: req.body.endereco,
    tipoCozinha: req.body.tipoCozinha,
    telefone: req.body.telefone,
  });

  try {
    const novoRestaurante = await restaurante.save();
    res.status(201).json(novoRestaurante);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function atualizarRestaurante(req, res) {
  try {
    const restaurante = await Restaurante.findById(req.params.id);
    if (restaurante == null) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }

    if (req.body.nome != null) {
      restaurante.nome = req.body.nome;
    }
    if (req.body.endereco != null) {
      restaurante.endereco = req.body.endereco;
    }
    if (req.body.tipoCozinha != null) {
      restaurante.tipoCozinha = req.body.tipoCozinha;
    }
    if (req.body.telefone != null) {
      restaurante.telefone = req.body.telefone;
    }

    const restauranteAtualizado = await restaurante.save();
    res.json(restauranteAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deletarRestaurante(req, res) {
  try {
    const restaurante = await Restaurante.findById(req.params.id);
    if (restaurante == null) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }
    await restaurante.deleteOne();
    res.json({ message: 'Restaurante excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  obterRestaurantes,
  obterRestaurante,
  criarRestaurante,
  atualizarRestaurante,
  deletarRestaurante,
};
