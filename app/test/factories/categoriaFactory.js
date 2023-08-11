const faker = require('faker');
const Categoria = require('../../models/Categoria');

module.exports = async (overrides = {}) => {
  const categoria = {
    nombre: faker.lorem.word(),
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
    ...overrides,
  };

  return await Categoria.create(categoria);
};
