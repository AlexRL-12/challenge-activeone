const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  posts_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  contenido: {
    type: String,
    required: true,
    maxlength: 500,
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

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
