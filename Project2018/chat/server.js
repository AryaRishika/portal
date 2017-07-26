/**
 * Created by rishika on 10/7/17.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

var users = [];
io.on('connection', function(socket) {
    console.log('A user connected');
    socket.on('set', function (data) {
        users.push(data);

    });

    socket.on('showList',function(data){

        socket.emit('list',users);
    });


    socket.on('findFriend',function(data){

        var id;
        for(var i=0;i<users.length;i++)
        {
            if(users[i]['user']===data.a)
            {
                id=users[i]['id'];
                i=90;
            }
        }
        socket.join(data.b);
        var room=data.b;
        io.to(id).emit('come_chat',room);
    });
    socket.on('join_room',function(data){

        room=data;
        socket.join(data);
        console.log("joined room::" + data);
    });
    socket.on('connecttor',function(data){
        console.log(data);
        io.sockets.in(data.a).emit('newmsg', data);

    });


});
http.listen(5000, function(){
    console.log('listening on *:5000');
});