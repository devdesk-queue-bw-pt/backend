const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('../middleware/middleware');

const authRouter = require('../auth/auth_router.js');
const ticketRouter = require('../tickets/tickets_router')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/tickets', ticketRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });

module.exports = server;