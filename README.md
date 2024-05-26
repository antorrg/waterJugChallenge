# waterJugChallenge
Api rest design for technical challenge
# BackendMongo




## Usuarios

### Creación de Usuario

- Método: `POST`
- Ruta: `/user/create`
- Descripción: Crea un nuevo usuario.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.

### Inicio de Sesión de Usuario

- Método: `POST`
- Ruta: `/user/login`
- Descripción: Inicia sesión para obtener un token de acceso.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.

### Obtener Todos los Usuarios (necesita permiso de moderator o admin)

- Método: `GET`
- Ruta: `/user`
- Descripción: Obtiene la lista de todos los usuarios.

### Actualización de Usuario (Requiere validación)
"Esta función está disponible para el usuario"

- Método: `PUT`
- Ruta: `/user/:id`
- Descripción: Actualiza la información del usuario.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.
  - `username` (string): Nombre del usuario.
  - `usersurname` (string): Apellido del usuario.
  - `image` (string): Url de la imagen.

  ### Eliminar Usuario (Borrado lógico).

- Método: `DELETE`
- Ruta: `/user/:id`
- Descripción: Eliminta el usuario.

### Actualización de Usuario (Administrador)
"Esta función solo está disponible para el administrador, requiere rol de admin y validación"

- Método: `PUT`
- Ruta: `/user/admin:id`
- Descripción: Actualiza la información del usuario.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.
  - `username` (string): Nombre del usuario.
  - `usersurname` (string): Apellido del usuario.
  - `image` (string): Url de la imagen.
  - `role` (string): Rol del usuario
  - `enable` (boolean): Habilita o bloquea a un usuario (por defecto habilitado "true").
  


### Sigue editando

- Método:
  - Ruta