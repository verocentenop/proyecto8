# Proyecto 8

¡Hola! Este es mi proyecto 8. En él seguimos trabajando con una BBDD de Mongo Atlas y creo colecciones con datos relacionados entre ellos, haciendo peticiones a través de Insomnia y comprobando el funcionamiento de cada uno de los elementos del CRUD según los permisos otorgados a los usuarios, esta vez con gestión de archivos multimedia con almacenamiento en Cloudinary.

Está basado en libros y sus autores, siendo estas las dos colecciones utilizadas. Lo componen 3 colecciones en total, Libros, Autores y Usuarios, con permisos otorgados a cada uno según el rol que posea, para poder realizar diferentes acciones.. Están organizados y entrelazados por diversos recursos que comparten entre ellos.

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)
4. [Configuración](#configuración)
5. [Contribuir](#contribuir)
8. [Contacto](#contacto)

## Instalación

Instrucciones para instalar el proyecto.
```bash
- Clonar el repositorio
git clone https://github.com/verocentenop/proyecto8.git

- Entrar al directorio del proyecto
cd proyecto8
``` 

## Uso
```bash
- Comando para iniciar el proyecto:
npm run dev
npm run seed (para ejecutar la semilla)

- Ejemplos de rutas para hacer gestiones:
Brands:
http://localhost:3000/api/v1/authors/country/España (get - país) usuarios
http://localhost:3000/api/v1/authors/66f2a4e27273656e8900e5b1 (get - ID) usuarios
http://localhost:3000/api/v1/authors/books/El%20Hobbit (get - books) usuarios
http://localhost:3000/api/v1/authors/ (get) - usuarios
http://localhost:3000/api/v1/authors/ (post) usuarios registrados
http://localhost:3000/api/v1/authors/66f2a4e27273656e8900e5b1 (put) administradores
http://localhost:3000/api/v1/authors/66f2a4e27273656e8900e5b1 (delete) administradores

Books:
http://localhost:3000/api/v1/books/category/Novelea (get - categoria) usuarios
http://localhost:3000/api/v1/books/66f2a0db2366004d9ea23904 (get - ID) usuarios
http://localhost:3000/api/v1/books/year/2019 (get - year) usuarios
http://localhost:3000/api/v1/books/ (get) - usuarios
http://localhost:3000/api/v1/books/ (post) usuarios registrados
http://localhost:3000/api/v1/books/66f2a0db2366004d9ea23904 (put) administradores
http://localhost:3000/api/v1/books/66f2a0db2366004d9ea23904 (delete) administradores

Users:
http://localhost:3000/api/v1/users/register (post - registro) usuarios
http://localhost:3000/api/v1/users/login (post - login) usuarios
http://localhost:3000/api/v1/users/ (get) - administradores
http://localhost:3000/api/v1/users/66f18280c3bb691872844bc4 (put) administradores
http://localhost:3000/api/v1/users/66f18280c3bb691872844bc4 (delete) usuarios registrados a si mismos o administradores

``` 
## Características
- Se pueden solicitar datos por ID, país, nombre, año de publicación o categoria.
- Cada colección tiene un CRUD completo.
- El elemento Seeds envía datos a la colección de libros.

## Configuración
Los datos sensibles están configurados en un .env tratado con .gitignore, se han subido a git en un .txt

## Contacto
Información de contacto para preguntas o comentarios.

- **Email**: verocentenop@gmail.com
- **GitHub**: verocentenop
