const express = require('express');

const server = express();

const configRoutes = require('../config/routes');

server.use(express.json());

configRoutes(server);

server.get('/', (req, res) => {
    res.status(200).json({api: 'sanity check'})
});

module.exports = server; 
