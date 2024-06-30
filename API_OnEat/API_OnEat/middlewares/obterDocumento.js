async function obterDocumento(modelo) {
  return async (req, res, next) => {
    try {
      const documento = await modelo.findById(req.params.id);
      if (documento == null) {
        return res.status(404).json({ message: `${modelo.modelName} não encontrado` });
      }
      res.documento = documento;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}

module.exports = obterDocumento;
