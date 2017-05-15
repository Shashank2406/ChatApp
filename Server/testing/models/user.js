// Load required packages
var mongoose = require('mongoose');


// Define our user schema
var UserSchema = new mongoose.Schema({

    name: {type: String},
    data: {type: String},
    created_at: {type: Date, default: Date.now},
  
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
