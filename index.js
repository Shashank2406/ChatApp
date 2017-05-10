var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');




var port = process.env.PORT || 3000;

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/chatapp');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/index')
app.use('/api', routes);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    exports.data=msg;
    console.log(msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
