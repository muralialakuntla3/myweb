// Define the chatbot's responses
const responses = {
    "hello": "Hello! How can I assist you?",
    "how are you": "I'm just a bot, but who are you?",
    "default": "I'm sorry, I don't understand. Please ask another question."
};

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    displayMessage(userInput, true); // Display user's message
    respondToUser(userInput.toLowerCase()); // Process user's input
    document.getElementById("userInput").value = ""; // Clear the input field
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

// Attach the sendMessage function to the Send button's click event
document.querySelector("#sendButton").addEventListener("click", sendMessage);

// Allow sending a message when the Enter key is pressed
document.getElementById("userInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
