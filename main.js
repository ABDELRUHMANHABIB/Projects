let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");
let intervalId;

const quotes = [
    { "text": "Believe you can, and you're halfway there.", "id": "1" },
    { "text": "Success is not final, failure is not fatal.", "id": "2" },
    { "text": "Start where you are. Use what you have. Do what you can.", "id": "3" },
    { "text": "The only limit is your mind.", "id": "4" },
    { "text": "Don’t stop until you’re proud.", "id": "5" },
    { "text": "Dream big. Work hard. Stay focused.", "id": "6" },
    { "text": "You are stronger than you think.", "id": "7" }
];

// Function to generate a random quote
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    quoteDiv.textContent = randomQuote.text;
    quoteId.textContent = randomQuote.id;
}

// Event listeners
generateBtn.addEventListener("click", generateQuote);

autoBtn.addEventListener("click", () => {
    if (intervalId) return; // If already running, do nothing
    autoStatus.textContent = "Auto is ON";
    intervalId = setInterval(generateQuote, 2000); // Auto-generate quotes every 2 seconds
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    autoStatus.textContent = "Auto is OFF";
});
