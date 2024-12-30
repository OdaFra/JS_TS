const dbcategoria = require('./dbcategoria');
var Categoria = require('./categoria');

var express = require('express');
var bodyParse = require('body-parser');
var cors = require('cors');

var app=express();
var router = express.Router();

//Documentacion con Swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
   swaggerDefinition:{
      info:{
         version:"1.0.1",
         title:'Api Rest Categorias',
         description:'Api Rest Categorias',
         contact:{
            name:'Oscar Ramirez'
         },
         servers:["http://localhost:8090"]
      }
   },
   apis:['api.js']
};

//TODO: Documentacion con swagger y Ruta*/
const swaggerDoc = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json());
app.use(cors());

//Creamos la ruta principal

app.use('/api',router);

//Ruta /categoria
/**
 * @swagger
 * /api/categoria:
 *  get:
 *      description: Obtiene todas las categorias
 *      responses:
 *         '200':
 *              description: Listado obtenidos correctamente.   
 */

router.route('/categoria').get((request, response)=>{
   dbcategoria.getCategoria().then(result=>{
    response.json(result[0]);
 });
});

//Ruta por id categoria,
/**
 * @swagger
 * /api/categoria/{id}:
 *  get:
 *    description: Obtiene todas las categorias x ID
 *    parameters:
 *      - in: path
 *        name: id
 *    responses:
 *          '200':
 *              description: Listado obtenidos correctamente.   
 */

router.route('/categoria/:id').get((request, response)=>{
   dbcategoria.getCategoriaid(request.params.id).then(result=>{
      response.json(result[0]);
   });
  });

  //Ruta para guardar
/**
 * @swagger
 * /api/categoria/guardar:
 *  post:
 *    description: Para insertar una nueva categoria
 *    produces:
 *         - aplication/json
 *    parameters:
 *        - name: "body"
 *          in: body
 *          require: true
 *          schema:
 *             type: object
 *             example:
 *                cat_id: "1"
 *                cat_name: "Category 1"
 *                cat_desc: "Category 1"
 *    responses:
 *          '200':
 *              description: Categoria guardada correctamente.
 *              context:
 *                  aplication/json:
 *                  type: object  
 */

  router.route('/categoria/guardar').post((request, response)=>{
   let categoria = {...request.body};
   dbcategoria.insertCategoria(categoria).then(result=>{
      response.json(result[0]);
   });
  });

  //Ruta para actualizar
  /**
 * @swagger
 * /api/categoria/actualizar:
 *  put:
 *    description: Actualizar una categoria
 *    produces:
 *         - aplication/json
 *    parameters:
 *        - name: "body"
 *          in: body
 *          require: true
 *          schema:
 *             type: object
 *             example:
 *                 cat_id: "1"
 *                 cat_name: "Update Category 1"
 *                 cat_desc: "Update Category 1"
 *    responses:
 *          '200':
 *              description: Categoria guardada correctamente.
 *              context:
 *                  aplication/json:
 *                  type: object  
 */

  router.route('/categoria/actualizar').put((request, response)=>{
   let categoria = {...request.body};
   dbcategoria.actualizarCategoria(categoria).then(result=>{
      response.json(result[0]);
   });
  });


var port = process.env.PORT || 8090;

app.listen(port);

console.log('Categoria Api iniciando con el puerto: '+port);