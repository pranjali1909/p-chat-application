const path=require('path');
const http=require('http')
const express=require('express');
const socketIO=require('socket.io');


const port=process.env.PORT||3000;
const app = express()
var server = http.createServer(app)
var io=socketIO(server);


io.on('connection',(socket)=>{
    socket.on('join',(params,callback)=>{
        
    })

    socket.on('createMessage',(message,callback)=>{

    })

    socket.on('createLocationMessage',(coords)=>{

    })

    socket.on('disconnect',()=>{

    })
})


server.listen(port,()=>{
	console.log(`Server is up on ${port}`);
})