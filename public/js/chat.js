var socket = io();
function scrollToBottom() {
    // Selectors
    var messages = $('#messages');
    var newMessage = messages.children('li:last-child')
    //Height
    var clientHeight = messages.prop('clientHeight')
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = $('#messages li').last().innerHeight();
    var lastMessageHeight = $('#messages li:nth-last-child(2)').innerHeight();
    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        messages.scrollTop(scrollHeight);
    }

}

socket.on('connect',function(){


    socket.on('disconnect',function(){

    })

    socket.on('updateUserList',function(users){

    })

    socket.on('newMessage',function(message){

    })

    socket.on('newLocationMessage',function(message){

    })

    
})