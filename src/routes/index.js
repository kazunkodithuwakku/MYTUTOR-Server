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
router.post('/registerUser', async (req, res) => {
    const reqPayload = req.body;
    const data = await mongoClient.registerUser(reqPayload);
    res.send(data).status(200);
});

/**
 * this is the router for login students
 */
router.post('/loginUser', async (req, res) => {
    const reqPayload = req.body;
    const data = await mongoClient.loginUsers(reqPayload);
    res.send(data).status(200);
});


router.get('/test', async (req, res) => {
    const jobExtractPayload = req.body;
    const data = 'this is a test'
    res.send(data).status(200);
});

router.get('/getCourses', async (req, res) => {
    const data = await mongoClient.getCourses();
    res.send(data).status(200);
});
/**
 * this is the router for create new course
 */
router.post('/addCourse', async (req, res) => {
    const reqPayload = req.body;
    const data = await mongoClient.addCourse(reqPayload);
    res.send(data).status(200);
});

module.exports = router;