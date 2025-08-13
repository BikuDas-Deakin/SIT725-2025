const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/project', projectController.getAllProjects);

module.exports = router;
