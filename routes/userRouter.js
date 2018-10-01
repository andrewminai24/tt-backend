

const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    .get((req, res, next) => {
        res.end('{"USER": "GET"}')
    })
    .post((req, res, next) => {
        res.end('{"USER": "POST"}')
    })
    .put((req, res, next) => {
        res.end('{"USER": "PUT"}')
    })
    .delete((req, res, next) => {
        res.end('{"USER": "DELETE"}')
    });

    module.exports = userRouter;