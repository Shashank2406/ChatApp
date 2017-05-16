var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var LocalStorage = require('node-localstorage').LocalStorage;
var User = require('./schema');



var port = process.env.PORT || 3000;

var first_obj=[];
var roomno = 1;
var done=1;
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
    //io.sockets.in("room-"+roomno).emit('message', {type:'new-message', text: 'Do you want to save the chat?', user: 'Admin',time1: 'Now'});
  });
if(roomno<2)
{
    flag=0;
    data=[];
    name='default';
    SECOND='';
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem('FIRST',name);
    clname='';
    socket.on('add-message', (message,name) => {
    time= new Date()
    time = time.getHours()+":"+time.getMinutes()
    // console.log(time)
    io.sockets.in("room-"+roomno).emit('message', {type:'new-message', text: message, user: name,time1: time});
    // console.log(message)
    data.push(message)
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
    if(SECOND!=''&&flag==1){
    mongo.connect('mongodb://localhost:27017/chatapp', function (err, db) {
    var user = new User({
        user1: local,
        user2: SECOND,
        chat:  data,
    });
    
    if(done==1)
    {
      db.collection('user').save(user);
      done=2;
    }
    else
    {
      db.collection('user').findOne({user1:local,user2:SECOND},function(err){
        db.collection('user').save(user);
        console.log("done");
      }
    )
    }
    // console.log("save"+user);
    // console.log("DB"+db);
    
    // db.collection('user').findOne(_id)
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
