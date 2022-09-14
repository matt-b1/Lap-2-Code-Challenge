const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());

const postsRoutes = require ('./routes/posts')

server.use('/posts', postsRoutes)

server.get('/', (req,res) => res.send('Index'))

module.exports = server
