var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;


var port = process.env.PORT || 3002;

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/chatapp');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/index')
app.use('/api', routes);

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
//     mongo.connect('mongodb://localhost:27017/chatapp', function (err, db) {
//     var collection = db.collection('chat messages');
//     collection.insert({ content: message }, function(err, o) {
//         if (err) { console.warn(err.message); }
//         else { console.log("chat message inserted into db: " + message); }
//     });
// });
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
