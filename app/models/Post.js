const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  categorias_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorias',
    required: true,
  },
  titulo: {
    type: String,
    required: true,
    maxlength: 150,
  },
  contenido: {
    type: String,
    required: true,
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
  },
  fecha_actualizacion: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
