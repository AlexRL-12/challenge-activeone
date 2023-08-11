# API de Ejemplo

Esta es una API de ejemplo para realizar operaciones CRUD en diferentes rutas. La API se utiliza para administrar posts, comentarios y categorías.

## Rutas

### Operaciones para la ruta /api/posts:

#### Crear un nuevo post:

Método: POST
URL: http://localhost:3000/api/posts
Cuerpo: JSON
```json
{
  "titulo": "Título del Post",
  "contenido": "Contenido del post"
}
Respuesta esperada: Código de estado 201 (Created) con el post creado.

Actualizar un post:
Método: PUT
URL: http://localhost:3000/api/posts/{ID_DEL_POST}
Cuerpo: JSON

json
Copy code
{
  "titulo": "Nuevo título",
  "contenido": "Nuevo contenido del post"
}
Respuesta esperada: Código de estado 200 (OK) con el post actualizado.

Eliminar un post:
Método: DELETE
URL: http://localhost:3000/api/posts/{ID_DEL_POST}
Respuesta esperada: Código de estado 204 (No Content).

Ver un post por su ID:
Método: GET
URL: http://localhost:3000/api/posts/{ID_DEL_POST}
Respuesta esperada: Código de estado 200 (OK) con los detalles del post.

Ver todos los posts:
Método: GET
URL: http://localhost:3000/api/posts
Respuesta esperada: Código de estado 200 (OK) con una lista de todos los posts.

Operaciones para la ruta /api/comentarios:
Crear un nuevo comentario:
Método: POST
URL: http://localhost:3000/api/comentarios
Cuerpo: JSON

json
Copy code
{
  "posts_id": "ID_DEL_POST",
  "contenido": "Contenido del comentario"
}
Respuesta esperada: Código de estado 201 (Created) con el comentario creado.

Actualizar un comentario:
Método: PUT
URL: http://localhost:3000/api/comentarios/{ID_DEL_COMENTARIO}
Cuerpo: JSON

json
Copy code
{
  "contenido": "Nuevo contenido del comentario"
}
Respuesta esperada: Código de estado 200 (OK) con el comentario actualizado.

Eliminar un comentario:
Método: DELETE
URL: http://localhost:3000/api/comentarios/{ID_DEL_COMENTARIO}
Respuesta esperada: Código de estado 204 (No Content).

Ver un comentario por su ID:
Método: GET
URL: http://localhost:3000/api/comentarios/{ID_DEL_COMENTARIO}
Respuesta esperada: Código de estado 200 (OK) con los detalles del comentario.

Ver todos los comentarios:
Método: GET
URL: http://localhost:3000/api/comentarios
Respuesta esperada: Código de estado 200 (OK) con una lista de todos los comentarios.

Operaciones para la ruta /api/categorias:
Crear una nueva categoría:
Método: POST
URL: http://localhost:3000/api/categorias
Cuerpo: JSON

json
Copy code
{
  "nombre": "Nombre de la categoría"
}
Respuesta esperada: Código de estado 201 (Created) con la categoría creada.

Actualizar una categoría:
Método: PUT
URL: http://localhost:3000/api/categorias/{ID_DE_LA_CATEGORIA}
Cuerpo: JSON

json
Copy code
{
  "nombre": "Nuevo nombre de la categoría"
}
Respuesta esperada: Código de estado 200 (OK) con la categoría actualizada.

Eliminar una categoría:
Método: DELETE
URL: http://localhost:3000/api/categorias/{ID_DE_LA_CATEGORIA}
Respuesta esperada: Código de estado 204 (No Content).

Ver una categoría por su ID:
Método: GET
URL: http://localhost:3000/api/categorias/{ID_DE_LA_CATEGORIA}
Respuesta esperada: Código de estado 200 (OK) con los detalles de la categoría.

Notas
Reemplaza ID_DEL_POST, ID_DEL_COMENTARIO y ID_DE_LA_CATEGORIA con los valores de ID correspondientes.

Asegúrate de tener el servidor en ejecución antes de realizar las llamadas a la API.