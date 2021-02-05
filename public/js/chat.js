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

socket.on('connect', function () {

    var params = $.deparam(window.location.search)
    socket.emit('join', params, function (err) {
        if (err) {
            alert(err);
            window.location.href = '/';
        } else {
            console.log('No error')
        }

        socket.on('disconnect', function () {
            console.log('Disconnected from server')
        })

        socket.on('updateUserList', function (users) {
            var ol = $('<ol></ol>');
            users.forEach(function (user) {
                ol.append($('<li></li>').text(user));
            })
            $('#users').html(ol);
            console.log('Users List', users)
        })

        socket.on('newMessage', function (message) {

        })

        socket.on('newLocationMessage', function (message) {

        })
    })
})