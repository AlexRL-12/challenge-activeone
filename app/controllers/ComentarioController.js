const Comentario = require('../models/Comentario');

module.exports = {
  async create(req, res) {
    try {
      const { posts_id, contenido } = req.body;

      const newComentario = await Comentario.create({
        posts_id,
        contenido,
      });

      res.status(201).json({ message: 'Comentario creado exitosamente', comentario: newComentario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el comentario' });
    }
  },

  async update(req, res) {
    try {
      const updatedComentario = await Comentario.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          fecha_actualizacion: new Date(),
        },
        { new: true }
      );

      res.status(200).json({ message: 'Comentario actualizado exitosamente', comentario: updatedComentario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el comentario' });
    }
  },

  async delete(req, res) {
    try {
      await Comentario.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Comentario eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
  },

  async ver(req, res) {
    try {
      const comentario = await Comentario.findById(req.params.id);
      res.status(200).json(comentario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el comentario' });
    }
  },

  async verTodos(req, res) {
    try {
      const comentarios = await Comentario.find();
      res.status(200).json(comentarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
  },
};
