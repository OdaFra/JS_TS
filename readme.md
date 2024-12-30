# Proyecto Centralizado: Node.js con Express, MongoDB, SQL Server y Autenticación

## Descripción General

Este repositorio contiene varios proyectos desarrollados en Node.js que abordan distintas temáticas relacionadas con:

- Conexión a bases de datos MongoDB y SQL Server.
- Desarrollo de API REST.
- Implementación de autenticación y registro.
- Uso de JavaScript y TypeScript.

Cada proyecto está organizado en carpetas independientes y tiene su propio archivo `package.json` con las dependencias y scripts necesarios.

## Estructura del Repositorio

```plaintext
.
├── JS_inicial_NodeJS_Express_Mongo
│   ├── basico
│   ├── cliente_servidor
│   ├── servidor_web
│   └── rest_api_mongo
├── NodeJS_Autenticacion_ApiRest
├── NodeJS_Express_Mongo_ApiRest
└── NodeJS_SQLServer_ApiRest
```

## Proyectos

### 1. **JS_inicial_NodeJS_Express_Mongo**

Contiene ejemplos básicos para iniciarse en Node.js, Express y MongoDB.

#### Subcarpetas

- **basico**: Conceptos iniciales para comprender JavaScript.

- **Cliente Servidor**:
  - Proyecto simple que implementa un modelo cliente-servidor.
  - Dependencias: `axios`.
  
- **Ejemplo Servidor Web**:
  - Practica con servidores web en Node.js.
  - Dependencias: `express`, `joi`.
  - DevDependencies: `nodemon`.
  - Scripts:

    ```json
    "scripts": {
      "dev": "nodemon index.js"
    }
    ```

- **Rest API con Mongo**:
  - Desarrollo de una API REST conectada a MongoDB.
  - Soporta configuración mediante un archivo `.env`.
  - Dependencias: `express`, `dotenv`, `mongodb`, `http-errors`, `excel4node`.
  - DevDependencies: `nodemon`.
  - Scripts:

    ```json
    "scripts": {
      "dev": "DEBUG=app:* nodemon index.js",
      "start": "node index.js"
    }
    ```

---

### 2. **Api Rest Autenticacion**

Proyecto en TypeScript que implementa autenticación (registro y login) con MongoDB.

- Características:
  - Uso de un archivo `.env` para configuraciones de conexión (local o Docker).
  - Manejo de dependencias modernas para TS y Node.js.
  
- Dependencias principales: `express`, `mongoose`, `body-parser`, `compression`, `cors`.
- DevDependencies: `typescript`, `ts-node`, `nodemon`, `@types` para las librerías utilizadas.
- Scripts:

  ```json
  "scripts": {
    "start": "nodemon"
  }
  ```

---

### 3. **Api Rest NodeJs, Express y Mongo**

Un API REST avanzado que incluye:

- Autenticación de usuarios.
- Gestión de productos y ventas.
- Configuración de base de datos MongoDB (remota o Docker).

- Dependencias principales: `express`, `dotenv`, `mongodb`, `excel4node`, `http-errors`.
- DevDependencies: `nodemon`.
- Scripts:

  ```json
  "scripts": {
    "dev": "DEBUG=app:* nodemon index.js",
    "start": "node index.js"
  }
  ```

---

### 4. **Api Rest con SQLServer (Ejemplo sencillo)**

Ejemplo sencillo de API REST que conecta a SQL Server.

- Documentación incluida para facilitar su implementación.
- Dependencias principales: `express`, `mssql`, `body-parser`, `cors`, `swagger-jsdoc`, `swagger-ui-express`.
- DevDependencies: `nodemon`.
- Scripts:

  ```json
  "scripts": {
    "start": "nodemon api.js"
  }
  ```

---

## Tecnologías Utilizadas

### Node.js

Plataforma de ejecución para JavaScript del lado del servidor.

### Express

Framework para la construcción de aplicaciones web y API.

### MongoDB

Base de datos NoSQL utilizada en varios proyectos para el almacenamiento de datos.

### SQL Server

Base de datos relacional utilizada en el proyecto NodeJS_SQLServer_ApiRest.

### TypeScript

Lenguaje de programación basado en JavaScript con tipado estático, utilizado en NodeJS_Autenticacion_ApiRest.

---

## Configuración

### 1. Requisitos previos

- Node.js (v16 o superior).
- npm (v8 o superior).
- Docker (opcional para bases de datos).

### 2. Instalación de dependencias

Ejecuta el siguiente comando en cada proyecto para instalar las dependencias:

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en el directorio raíz y define las siguientes variables (si aplica):

```env
API_URL=/api/v1
PORT=3000
CONNECTION_STRING=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/ecommerce?authSource=<usuario>
secret=tu_jwt_secreto
```

### 4. Ejecución

#### Con Docker

1. Construir el contenedor de Docker:

   ```bash
   docker compose -p chatapp_mongodb up -d
   ```

   La API estará disponible en `http://localhost:3000`.

#### Sin Docker

Asegúrate de que tengas una cuenta en MongoDB con sus variables correspondientes para la conexión.

## Notas adicionales

- Asegúrate de definir las variables de entorno correctamente antes de ejecutar los proyectos.
- Revisa la documentación dentro de cada proyecto para instrucciones específicas.

5. Ejecutar los scripts definidos:
   - **Desarrollo**: `npm run dev`
   - **Producción**: `npm start`

---

## Contacto

- **Correo electrónico**: [osramirezf@gmail.com](mailto:osramirezf@gmail.com)
- **LinkedIn**: [Perfil](https://www.linkedin.com/in/oscar-ramirez-franco/)
- **GitHub**: [Repositorio](https://github.com/OdaFra)
