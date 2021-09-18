'use strict';

const express = require('express');
const router = express.Router();
const { get } = require('../models/db');

router.get('/:user_id?', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    if (req.params.user_id) {
        const user = parseInt(req.params.user_id);
        const favorites = await jobs.find({ user_id: user}).toArray();
        res.json(favorites).status(200);
    } else {
        const allJobs = await jobs.find({}).toArray();
        res.json(allJobs).status(200);
    } 
});

module.exports = router