const Post = require('../models/Post');
const mongoose = require('mongoose');

module.exports = {
  async create(req, res) {
    try {
      const { categorias_id, titulo, contenido } = req.body;

      const newPost = await Post.create({
        categorias_id: new mongoose.Types.ObjectId(categorias_id),
        titulo,
        contenido,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      });

      res.status(201).json({ message: 'Post creado exitosamente', post: newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el post' });
    }
  },

  async update(req, res) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          fecha_actualizacion: new Date(),
        },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.status(200).json({ message: 'Post actualizado exitosamente', post: updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el post' });
    }
  },

  async delete(req, res) {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);

      if (!deletedPost) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.status(200).json({ message: 'Post eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el post' });
    }
  },

  async edit(req, res) {
    try {
      const editedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { contenido: req.body.contenido },
        { new: true }
      );

      if (!editedPost) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.status(200).json({ message: 'Post editado exitosamente', post: editedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al editar el post' });
    }
  },

  async ver(req, res) {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el post' });
    }
  },

  async verTodo(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los posts' });
    }
  },
};
