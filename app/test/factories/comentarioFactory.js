const faker = require('faker');
const Comentario = require('../../models/Comentario');

module.exports = async (overrides = {}) => {
  const comentario = {
    posts_id: mongoose.Types.ObjectId(),
    contenido: faker.lorem.sentence(),
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
    ...overrides,
  };

  return await Comentario.create(comentario);
};
