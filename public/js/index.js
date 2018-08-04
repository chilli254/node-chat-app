let socket =io();

socket.on('connect',()=>{
    console.log(`Connected to server`);

    socket.emit('createMessage',{
        from: 'Peter',
        text: 'Hey .Thats work for me.'
    })

});
socket.on('disconnect',()=>{
    console.log(`Disconnected`)
});

socket.on(`newMessage`, function (message) {
    console.log(`New  message`,message);
});