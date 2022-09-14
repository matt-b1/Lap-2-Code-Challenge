const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {res.send('Welcome to the library!')});

module.exports = server
