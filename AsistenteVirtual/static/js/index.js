const messageInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('user-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        const messageText = document.createElement('p');
        messageText.textContent = message;
        messageDiv.appendChild(messageText);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        receiveResponse();
        messageInput.value = '';
    }
}

// Function to simulate receiving a response
function receiveResponse() {
    var mensaje = document.getElementById('user-input').value;
    fetch(`/chatBot/?message=${encodeURIComponent(mensaje)}`)
        .then(response => response.json())
        .then(data => {
            var response = data.mensaje
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'received');
            const messageText = document.createElement('p');
            messageText.textContent = response;
            messageDiv.appendChild(messageText);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(error => {
            var response = "Error al utilizar el asistente: "+error;
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'received');
            const messageText = document.createElement('p');
            messageText.textContent = response;
            messageDiv.appendChild(messageText);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    
    
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}