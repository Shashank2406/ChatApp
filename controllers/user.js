// Load required packages
var User = require('../models/user');

exports.postUsers = function (req, res) {
    var user = new User({

        name: req.body.name,
        data: req.body.data,
        created_at: new Date(),

    });

    user.save(function (err, response) {
        if(err) {
            return res.json(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};


exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
