const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth_router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });

module.exports = server;