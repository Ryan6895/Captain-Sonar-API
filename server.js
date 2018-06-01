var Massive = require('massive');
const socket = require('socket.io');
module.export = express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var config = require("./config.js")


const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var router = express.Router();
//ip:http://192.168.86.88:3005/
//app.use(express.static(__dirname))

var UserCtrl = require('./Controllers/UserCtrl')
//User controller
app.get('/api/test', UserCtrl.test)
app.get('/api/user', UserCtrl.user)
app.post('/api/users/login', UserCtrl.login)

app.use('/api', router);

Massive(config.connectionString).then(massiveInstance => {
    app.set('db', massiveInstance);
    http.createServer(app).listen(3005);
});
  var db = app.get('db');
  console.log(app.get('db'));
  
  
  let io = socket(server);

io.on('connection', socket => {
  console.log('connection has been made: ', socket.id);


  socket.on('message', function(message) {
    console.log(socket.id, message);
    io.sockets.emit('chat', message)
  })

})