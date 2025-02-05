## Objetivo

Crear una aplicación web con NextJS (page router), que permita buscar, listar usuarios de GitHub, marcarlos como favoritos y mostrar detalles de un usuario seleccionado utilizando la API de GitHub Users.

## Requisitos

### Home (usar csr)

- Obtén una lista inicial de usuarios de la API de GitHub Users. ✅
- Mostrar los usuarios en una lista con sus nombres y avatares. ✅
- Implementar un buscador que permita filtrar los usuarios haciendo peticiones a la API por nombre. ✅
- Cada usuario debe tener un enlace a una página de detalle. ✅
- Poder poner como favorito los usuarios (sin necesidad de persistir) ✅

### Página de Detalle del Usuario (usar ssr)

- Mostrar los detalles de un usuario específico cuando se hace clic en él desde la página de listado (nombre, avatar, bio, repositorios, etc.). ✅
- Mostrar si es favorito y permitir agregar o eliminarlo ✅

### Estilo

- Podes usar CSS puro, styled-components o una librería de componentes como Material-UI para el estilo. ✅

## API

- https://api.github.com/users
- https://api.github.com/search/users?q={term}
- https://api.github.com/users/{username}
