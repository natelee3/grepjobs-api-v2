'use strict';

const express = require('express');
const router = express.Router();
const { get } = require('../models/db');

router.get('/:user_sub?', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    if (req.params.user_sub) {
        const user = req.params.user_sub;
        const favorites = await jobs.find({ user_sub: user}).toArray();
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

router.post('/update', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    console.log(req.body)
    const { job_id, user_sub, applied } = req.body;
    const filter = { $and: [{"job_id": job_id}, {"user_sub": user_sub}]};
    const query = { $set: {"applied": !applied} };
    const response = await jobs.updateOne(filter, query, err => {
        if (err) {
            console.error('ERROR', err)
        } else {
            res.sendStatus(200);
            console.log(`Updated 1 document successfully`)
        }
    });
});

router.delete('/delete', async (req, res) => {
    const client = get();
    const jobs = client.db('grepJobs').collection('jobs');
    const response = await jobs.deleteOne(req.body, err => {
        if (err) {
            console.error('ERROR', err)
        } else {
            res.sendStatus(200);
            console.log('delete successful')
        }
    });
});

module.exports = router;