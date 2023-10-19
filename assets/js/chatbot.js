// Define the chatbot's responses
const responses = {
    "hello": "Hello! How can I assist you?",
    "how are you": "I'm just a bot, but thanks for asking!",
    "default": "I'm sorry, I don't understand. Please ask another question."
};

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    displayMessage(userInput, true); // Display user's message
    respondToUser(userInput.toLowerCase()); // Process user's input
}

// Function to display a message in the chatbox
function displayMessage(message, isUser) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    messageElement.innerText = message;
    chatbox.appendChild(messageElement);
}

// Function to respond to the user
function respondToUser(userInput) {
    let response = responses[userInput] || responses["default"];
    displayMessage(response, false);
}
