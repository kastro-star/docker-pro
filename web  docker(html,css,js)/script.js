document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.querySelector('.send-button');
    const textarea = document.querySelector('textarea');
    const chatArea = document.querySelector('.chat-area');

    sendButton.addEventListener('click', () => {
        const message = textarea.value.trim();
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'user-message';
            messageDiv.textContent = message;
            chatArea.appendChild(messageDiv);
            textarea.value = '';
        }
    });

    textarea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendButton.click();
        }
    });
});
        // Declaring and assigning values to variables
                    var = "var"; // Declaring a variable and assigning a value
                    console.log(Var); // Outputs: Hello from JavaScript!
                