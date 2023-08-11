const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');
const ComentarioController = require('../controllers/ComentarioController');
const CategoriaController = require('../controllers/CategoriaController');

router.post('/posts', PostController.create);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);
router.patch('/posts/:id', PostController.edit);
router.get('/posts/:id', PostController.ver);
router.get('/posts', PostController.verTodo);

router.post('/comentarios', ComentarioController.create);
router.put('/comentarios/:id', ComentarioController.update);
router.delete('/comentarios/:id', ComentarioController.delete);
router.get('/comentarios/:id', ComentarioController.ver);
router.get('/comentarios', ComentarioController.verTodos);

router.post('/categorias', CategoriaController.create);
router.put('/categorias/:id', CategoriaController.update);
router.delete('/categorias/:id', CategoriaController.delete);
router.get('/categorias/:id', CategoriaController.ver);
router.get('/categorias', CategoriaController.verTodas);

module.exports = router;
