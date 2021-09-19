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

router.post('/add', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    const newJob = await jobs.insertOne(req.body, err => {
        if (err) {
            console.error('ERROR', err)
        } else {
            console.log('insert successful')
        }
    });
});

router.put('/update'), async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    const response = await jobs.updateOne(req.body, err => {
        if (err) {
            console.error('ERROR', err)
        } else {
            console.log(`Updated ${response.modifiedCount} documents successfully`)
        }
    });
};

router.delete('/delete', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    const response = await jobs.deleteOne(req.body, err => {
        if (err) {
            console.error('ERROR', err)
        } else {
            console.log('delete successful')
        }
    });
});

module.exports = router;