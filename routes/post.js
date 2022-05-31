const express = require('express');
const postsController = require('../controllers/posts.controller');


const router = express.Router();

router.get('/', postsController.index);

module.exports = router;