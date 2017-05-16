var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var LocalStorage = require('node-localstorage').LocalStorage;



var port = process.env.PORT || 3000;

var first_obj=[];
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
    SECOND="";
    flag=0;
    name='default';
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem('FIRST',name);
    clname='';
    socket.on('add-message', (message,name) => {
    time= new Date()
    time = time.getHours()+":"+time.getMinutes()
    io.sockets.in("room-"+roomno).emit('message', {type:'new-message', text: message, user: name,time1: time});
    first_obj.push({data : message,date: time,User:name});
    if(localStorage.getItem('FIRST')==='default')
    {
       localStorage.setItem('FIRST',name);
       //console.log(first_obj)
       local=localStorage.getItem('FIRST')
    }
    if(!(name===local))
    {
      SECOND=name;
      //console.log(first_obj);
      clname=local+SECOND;
      flag=1;
    }
    //console.log(socket.username+"Socket")
    // Connect to the MongoDB
    console.log(clname);
    if(SECOND!=''&&flag==1)
    {
      mongo.connect('mongodb://localhost:27017/chatapp', function (err, db) {
      var collection = db.collection(clname);
      first_obj.forEach((item) => collection.insert(item));
      first_obj=[];
      });
    }
  });
}
else
  {
    console.log("room not available");
    io.sockets.in("room-"+roomno).emit('message', {type:'new-message', text: 'room not available please try after sometime', user: 'Admin',time1: 'Now'});
  }

});

http.listen(port,"0.0.0.0", function(){
  console.log('listening on *:' + port);
});
