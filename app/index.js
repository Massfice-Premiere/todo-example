const express = require('express');
const swagger = require('swagger-express-router');
const swaggerUi = require('swagger-ui-express');

const docs = require('./docs');
const { app: { port } } = require('../config');
const TodoController = require('../controllers/TodoController');

const app = express();

module.exports = {
    init: async () => {
        const controllerss = {
            TodoController
        }

        app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));
        swagger.setUpRoutes(controllerss, app, docs, false);

        await new Promise((resolve) => {
            app.listen(port, () => {
                console.log(`server listening on port: ${port}`);

                resolve();
            })
        })
    }
}