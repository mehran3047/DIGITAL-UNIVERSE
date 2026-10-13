// MEHRAN'S DIGITAL UNIVERSE

console.log("Welcome to Mehran's Digital Universe!");

const visitor = "Guest";

function welcome() {
    alert("Welcome to my Digital Universe, " + visitor + "!");
}

function showMessage() {
    const messages = [
        "Think Beyond Limits.",
        "Build Something Extraordinary.",
        "Technology is the Future.",
        "Ideas Create Opportunities."
    ];

    const random = Math.floor(Math.random() * messages.length);

    alert(messages[random]);
}

// Welcome message
document.addEventListener("DOMContentLoaded", function() {
    console.log("Universe successfully loaded!");
});
