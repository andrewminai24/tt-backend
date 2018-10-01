

const express = require('express');
const bodyParser = require('body-parser');

const eventRouter = express.Router();
eventRouter.use(bodyParser.json());

eventRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    .get((req, res, next) => {
        res.end('{"EVENT": "GET"}')
    })
    .post((req, res, next) => {
        res.end('{"EVENT": "POST"}')
    })
    .put((req, res, next) => {
        res.end('{"EVENT": "PUT"}')
    })
    .delete((req, res, next) => {
        res.end('{"EVENT": "DELETE"}')
    });

    module.exports = eventRouter;