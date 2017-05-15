var User = require('../models/user');
var data = require('../index');


exports.postUsers = function (req, res) {
    var user = new User({

        name: data.data,
        data: "hello",
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
