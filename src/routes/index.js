const express = require('express');
const router = express.Router();
const {
    registerStudent
} = require('../client/mongoClient');
const mongoClient = require('../client/mongoClient');

router.get('/', (req, res) => res.send('My Tutor server is up and running!'));
/**
 * this is the router for register student details
 */
router.post('/registerStudent', async (req, res) => {
    const reqPayload = req.body;
    const data = await mongoClient.registerStudent(reqPayload);
    res.send(data).status(200);
});

/**
 * this is the router for login students
 */
router.post('/loginStudents', async (req, res) => {
    const reqPayload = req.body;
    const data = await mongoClient.loginStudents(reqPayload);
    res.send(data).status(200);
});


router.get('/test', async (req, res) => {
    const jobExtractPayload = req.body;
    const data = 'this is a test'
    res.send(data).status(200);
});

module.exports = router;