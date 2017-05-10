var express= require('express');
var router = express.Router();
var userController= require('../controllers/user');

router.route('/v2/users/')
  .post(userController.postUsers)
  .get(userController.getusers);

module.exports=router;
