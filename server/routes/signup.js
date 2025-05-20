var router = require('express').Router();
const signupController = require('../controllers/signup');

//Sub Routes
router.post('/', signupController.signup);

//export the router back to the index.js page
module.exports = router;