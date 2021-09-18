'use strict';

const cors = require('cors');
const express = require('express');
const connect = require('./models/db');
require ('dotenv').config();
const io = require('socket.io');
const http = require('http');

const port = 3333;
const hostname = '127.0.0.1';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

connect();

server.listen(port, hostname, () => {
    console.log(`Server started on ${hostname}:${port}`)
});  

// connect to socketio.
io(server).on('connection', (socket) => {
    console.log('Socket.IO Connected. ID: ', socket.id);
    console.log(app.get('mongodb'));
    let db = app.get('mongodb');
    if(db) {
       // db calls.
    };
});

const rootController = require('./routes/index');
const JobsController = require('./routes/jobs');
const proxyController = require('./routes/proxy');

app.use('/', rootController);
app.use('/jobs', JobsController);
app.use('/proxy', proxyController);