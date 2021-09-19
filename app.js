'use strict';

const cors = require('cors');
const express = require('express');
require ('dotenv').config();
const http = require('http');

const port = 3333;
const hostname = '127.0.0.1';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const connect = require('./models/db');
connect();

server.listen(port, hostname, () => {
    console.log(`Server started on ${hostname}:${port}`)
});  

const rootController = require('./routes/index');
const JobsController = require('./routes/jobs');
const proxyController = require('./routes/proxy');

app.use('/', rootController);
app.use('/jobs', JobsController);
app.use('/proxy', proxyController);