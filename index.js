function web() {
    window.open("webdevelopmentquiz.pdf", "_parent", "");
}

function flutter() {
    window.open("flutter.pdf", "_parent", "");
}

function python() {
    window.open("Nitin Sharma python.pdf", "_parent", "");
}

function front() {
    window.open("Nitin Sharma (1).pdf", "_parent", "");
}

function resume() {
    window.open("RESUME (3).pdf", "_parent", "");
}

document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    if (messageText) {
        const newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        newMessage.textContent = messageText;
        document.querySelector('.messages').appendChild(newMessage);
        input.value = '';
    }
});