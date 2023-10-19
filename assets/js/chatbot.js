// Define the chatbot's responses
const responses = {
    "hello": "Hello! How can I assist you?",
    "how are you": "I'm just a blody bot, but who are you?",
    "murali": "hello Master, sorry for rude behavior",
    "yellaiah": "hello bro, sorry for my rude response",
    "its okay": "thanks for your pardon, how's your day",
    "venu": "hello supreme master,how are you",
    "fine": "that's grate",
    "good": "ohh you seem little bit upset",
    "gopi": "hello small master, how's your day",
    "anil": "hello small master, how's your day",
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
document.querySelector("#chatbot-container button").addEventListener("click", sendMessage);

// Allow sending a message when the Enter key is pressed
document.getElementById("userInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
})

// Function to scroll the chatbox to the bottom

function scrollToBottom() {
    const chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to send a message and scroll to the bottom
function sendMessageAndScroll() {
    sendMessage();
    scrollToBottom();
}

// Attach the sendMessageAndScroll function to the Send button
document.querySelector("#chatbot-container button").addEventListener("click", sendMessageAndScroll);

// Attach the sendMessageAndScroll function to the Enter key press
document.querySelector("#userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessageAndScroll();
        event.preventDefault(); // Prevent the default Enter key behavior (e.g., line break)
    }
});
