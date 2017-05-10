var User = require('../models/user');
exports.postUsers = function(req, res) {
  var user = new User({
    name: req.body.name,
    data: req.body.email,
    created_at: new Date(),
  });

  user.save(function(err, response) {
    if (err) {
      res.json(err)
    }
    res.json({success: true, body: response});
  });

};

exports.getusers = function(req, res) {
  User.find({}, function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json(response);
  });
}
