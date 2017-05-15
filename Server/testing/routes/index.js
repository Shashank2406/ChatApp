var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/save')
  .post(userController.postUsers)
  .get(userController.getUsers);

module.exports = router;
