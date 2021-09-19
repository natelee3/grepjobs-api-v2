'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const message = `Welcome to the GrepJobs API!`
    res.send(message)
})

module.exports = router;
