'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const message = `Welcome to the GrepJobs API \n
    Navigate to routes /jobs/ or /jobs/{job_id} to view saved information`
    res.send(message)
})

module.exports = router;
