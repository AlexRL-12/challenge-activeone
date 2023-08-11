const faker = require('faker');
const Post = require('../../models/Post');

module.exports = async (overrides = {}) => {
  const post = {
    categorias_id: mongoose.Types.ObjectId(),
    titulo: faker.lorem.sentence(),
    contenido: faker.lorem.paragraph(),
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
    ...overrides,
  };

  return await Post.create(post);
};
