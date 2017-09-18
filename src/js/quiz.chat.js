quiz.chat = {};

var send = document.getElementById('send');
var chatWindow = document.querySelector('.chat-window');
var inputText = document.querySelector('#inputText');

send.addEventListener("click", () => {
chatWindow.scrollTop = chatWindow.scrollHeight;
var textValue = inputText.value;

chatWindow.innerText = chatWindow.value + textValue + '\n';
inputText.value = '';
});

setInterval(function(clearChat) {
chatWindow.innerText = 'Chat cleaned...\n';
}, 15000);
