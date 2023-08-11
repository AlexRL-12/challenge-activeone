const mongoose = require('mongoose');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app'); 
const postFactory = require('./factories/postFactory');
const comentarioFactory = require('./factories/comentarioFactory');
const categoriaFactory = require('./factories/categoriaFactory');

describe('Relaciones entre modelos', () => {
  before(async () => {

    await mongoose.connect('mongodb://localhost:27017/prueba', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {

    await mongoose.disconnect();
  });

  it('debe crear y verificar las relaciones entre tablas', async () => {
    const categoria = await categoriaFactory();
    const post = await postFactory({ categorias_id: categoria._id });
    const comentario = await comentarioFactory({ posts_id: post._id });


    const fetchedPost = await Post.findById(post._id).populate('comentarios');
    const fetchedCategoria = await Categoria.findById(categoria._id).populate('posts');
    const fetchedComentario = await Comentario.findById(comentario._id).populate('post');


    expect(fetchedPost.categorias_id.toString()).to.equal(categoria._id.toString());
    expect(fetchedPost.comentarios[0]._id.toString()).to.equal(comentario._id.toString());

    expect(fetchedCategoria.posts[0]._id.toString()).to.equal(post._id.toString());

    expect(fetchedComentario.post._id.toString()).to.equal(post._id.toString());
  });
});
