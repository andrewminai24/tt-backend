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
        res.end('');
    })
    .post((req, res, next) => {
        // TODO: Priviledged action, implement
        // user authentication to allow this action
        res.end('');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT: FORBIDDEN OPERATION');
    })
    .delete((req, res, next) => {
        // TODO: Priviledged action... user auth.
        res.end('');
    });

    module.exports = categoryRouter;