var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;


var port = process.env.PORT || 3002;


var roomno = 1;
io.on('connection', (socket) => {
  console.log('user connected');
  if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1)
    roomno++;
  socket.join("room-"+roomno);

  //Send this event to everyone in the room.
  //io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
  console.log("room"+roomno);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
if(roomno<2)
{
  socket.on('add-message', (message,name) => {
    time= new Date()
    time = time.getHours()+":"+time.getMinutes()
    console.log(time)
    io.sockets.in("room-"+roomno).emit('message', {type:'new-message', text: message, user: name,time1: time});
    console.log(message)
    //console.log(socket.username+"Socket")
      // Connect to the MongoDB
    // var ID_gen=345;
    // if(name!='Admin')
    // {
    //   name_sender=name;
    // }
    mongo.connect('mongodb://localhost:27017/chatapp', function (err, db) {
    var collection = db.collection(name);
    collection.insert({ content: message, User: name , stamp: time, ID: ID_gen}, function(err, o) {
        if (err) { console.warn(err.message); }
        else { console.log("chat message inserted into db: " + message); }
    });
//     console.log(name_sender);
//     db.collection(name_sender).find().populate('Admin').exec(function(err, documents){
//     // you will get drinks object in response 
// });
  });
  });
}
else
  {
    console.log("room not available");
  }

});



http.listen(port,"0.0.0.0", function(){
  console.log('listening on *:' + port);
});
