let CATEGORIES = require('../public/temp/categories');

const express = require('express');
const bodyParser = require('body-parser');

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

categoryRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    .get((req, res, next) => {
        // TODO: Query database for categories
        // and return categories as JSON object
        res.end(JSON.stringify(CATEGORIES));
    })
    .post((req, res, next) => {
        // TODO: Priviledged action, implement
        // user authentication to allow this action
        res.end('{"name": "POST"}');
        // res.end(`{"name":"${req.params.name}"}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('{"name": "PUT Forbidden"}');
    })
    .delete((req, res, next) => {
        // TODO: Priviledged action... user auth.
        res.end('{"name": "DELETE"}');
    });

module.exports = categoryRouter;