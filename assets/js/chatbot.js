    // Function to send a message
    function sendMessage() {
        const userInput = document.getElementById("userInput").value;
        if (userInput.toLowerCase() === "clear") {
            clearChat();
        } else {
            displayMessage(userInput, true); // Display user's message
            interactWithChatbot(userInput.toLowerCase()); // Process user's input with the chatbot
        }
        document.getElementById("userInput").value = ""; // Clear the input field
        scrollToBottom(); // Scroll to the bottom after sending a message
    }

    // Function to display a message in the chatbox
    function displayMessage(message, isUser) {
        const chatbox = document.getElementById("chatbox");
        const messageElement = document.createElement("div");
        messageElement.classList.add(isUser ? "user-message" : "bot-message");
        messageElement.innerText = message;
        chatbox.appendChild(messageElement);
    }

    // Function to interact with the chatbot
    function interactWithChatbot(userInput) {
        fetchChatbotResponse(userInput)
            .then(response => {
                displayMessage(response, false); // Display the chatbot's response
            })
            .catch(error => {
                console.error("Chatbot API error:", error);
                displayMessage("I'm sorry, there was an error. Please try again.", false);
            });
    }

    // Function to fetch chatbot response from an API (you can replace this with your API)
    function fetchChatbotResponse(userInput) {
        // Replace the following URL with your chatbot API endpoint
        const apiUrl = "https://chat.openai.com/c/2d59a216-3ced-4fd7-acdb-c9a4a61d8178";

        return fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userInput }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Chatbot API request failed");
                }
                return response.text();
            });
    }

    // Function to scroll the chatbox to the bottom
    function scrollToBottom() {
        const chatbox = document.getElementById("chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Function to clear the chat history
    function clearChat() {
        const chatbox = document.getElementById("chatbox");
        chatbox.innerHTML = ""; // Clear all messages
    }

    // Attach the sendMessage function to the Send button's click event
    document.querySelector("#chatbot-container button").addEventListener("click", sendMessage);

    // Allow sending a message when the Enter key is pressed
    document.getElementById("userInput").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    })