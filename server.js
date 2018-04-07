const http = require('http').createServer();
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('connected');

  socket.on('photo_selected', data => {
    socket.broadcast.emit('display_photo_details', data);
  });

  socket.on('disconnect', () => console.log('disconnected'));
});

http.listen(process.env.PORT || 5000);
