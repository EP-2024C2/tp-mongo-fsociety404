# Nodejs MongoDB REST API
- nodejs
- express
- mongoose

## Requisitos
- docker
- docker compose

## Instalacion
1. Clonar Repositorio : `https://github.com/EP-2024C2/tp-mongo-fsociety404.git`

2. Crear archivo `.env` : 
```sh
# puerto de escucha para la api
PORT=3000

# opcional: establecer apuntar a una instancia externa de mongo
# MONGO_URL=mongodb:27017

# Datos de conexión a BD Mongo Interna
MONGO_USERNAME=admin
MONGO_PASSWORD=admin1234
MONGO_DB=productos

```
o copie el archivo `.env-tamplate` a `.env` y realice las modifcaciones con los datos de conexión 

4. Ejecutar servidor: `docker compose up -d`


## Entorno de Desarrollo
Para iniciar un entorno de desarrollo con docker compose y hot reload seguir los siguientes pasos

### Prerequisitos
* docker
* docker compose

#### Con instancia de BD de prueba `mysql`:
1. editar archivo `.env`
2. agregar la linea `COMPOSE_FILE=docker-compose.yml:docker-compose-dev.yml`
3. iniciar instancia de bd: `docker compose up -d`
4. Listo! la api estará disponible en el puerto especificado en el archivo `.env` y cualquire cambio en el código la reiniciará
 


## Endpoints

| Verbo  | Recurso                    | Status code        | Descripción                                                 |
| ------ | -------------------------- | ------------------ | ----------------------------------------------------------- |
| GET    | /productos                 | 200                | Obtener todos los productos                                 |
| GET    | /productos/:id             | 200, 404           | Obtener un producto en particular                           |
| POST   | /productos                 | 201, 400           | Crear un producto                                           |
| PUT    | /productos/:id             | 200, 404           | Modificar los datos de un producto en particular            |
| DELETE | /productos/:id             | 200, 404, 500, 400 | Borrar un producto en particular                            |
| POST   | /productos/:id/fabricantes | 201, 404, 400      | Crear la asociación de producto con 1 o N fabricantes       |
| GET    | /productos/:id/fabricantes | 200, 404           | Obtener todos los fabricantes de un producto                |
| DELETE | /productos/:id/fabricantes | 200, 404           | Eliminar la asociación todos los fabricantes de un producto |
| POST   | /productos/:id/componentes | 201, 404, 400      | Crear la asociación de producto con 1 o N componentes       |
| GET    | /productos/:id/componentes | 200, 404           | Obtener todos los componentes de un producto                |
| DELETE | /productos/:id/componentes | 200, 404           | Eliminar la asociación todos los componentes de un producto |
| GET    | /fabricantes               | 200                | Obtener todos los fabricantes                               |
| GET    | /fabricantes/:id           | 200, 404           | Obtener un fabricante en particular                         |
| POST   | /fabricantes               | 201, 400           | Crear un fabricante                                         |
| PUT    | /fabricantes/:id           | 200, 404           | Modificar los datos de un fabricante en particular          |
| DELETE | /fabricantes/:id           | 200, 404, 500, 400 | Borrar un fabricante en particular                          |
| GET    | /fabricantes/:id/productos | 200, 404           | Obtener todos los productos de un fabricante                |
| GET    | /componentes               | 200                | Obtener todos los componentes                               |
| GET    | /componentes/:id           | 200, 404           | Obtener un componente en particular                         |
| POST   | /componentes               | 201, 400           | Crear un componente                                         |
| PUT    | /componentes/:id           | 200, 404           | Modificar los datos de un componente en particular          |
| DELETE | /componentes/:id           | 200, 404, 500, 400 | Borrar un componente en particular                          |
| GET    | /componentes/:id/productos | 200, 404           | Obtener todos los productos de un componente                |

## Modelo de API
![DER](DER.png)


## Estructura del Proyecto

```bash
├── Dockerfile
├── README.md
├── docker-compose-dev.yml
├── docker-compose.yml
├── img
│   ├── DER.png
│   ├── Incrustada.png
│   └── Referenciada.png
├── mongo_data
├── package-lock.json
├── package.json
├── request                             # requests de ejemplo
│   ├── componentes.http
│   ├── fabricantes.http
│   └── productos.http
└── src  
    ├── app.js
    ├── controllers
    │   ├── componente_controllers.js
    │   ├── fabricante_controllers.js
    │   ├── index.js
    │   └── producto_controllers.js
    ├── db
    │   └── server.js
    ├── middlewares
    │   └── middleware.js
    ├── models
    │   ├── componente_model.js
    │   ├── fabricante_model.js
    │   ├── index.js
    │   └── producto_model.js
    ├── routes
    │   ├── componente_routes.js
    │   ├── fabricante_routes.js
    │   ├── index.js
    │   └── producto_routes.js
    └── schemas
        ├── componente_schemas.js
        ├── fabricante_schemas.js
        └── producto_schemas.js
```
 
