const Categoria = require('../models/Categoria');

module.exports = {
  async create(req, res) {
    try {
      const { nombre } = req.body;

      const newCategoria = await Categoria.create({
        nombre,
      });

      res.status(201).json({ message: 'Categoría creada exitosamente', categoria: newCategoria });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la categoría' });
    }
  },

  async update(req, res) {
    try {
      const updatedCategoria = await Categoria.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          fecha_actualizacion: new Date(),
        },
        { new: true }
      );

      res.status(200).json({ message: 'Categoría actualizada exitosamente', categoria: updatedCategoria });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
  },

  async delete(req, res) {
    try {
      await Categoria.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'Categoría eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
  },

  async ver(req, res) {
    try {
      const categoria = await Categoria.findById(req.params.id);
      res.status(200).json(categoria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la categoría' });
    }
  },

  async verTodas(req, res) {
    try {
      const categorias = await Categoria.find();
      res.status(200).json(categorias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  },
};
