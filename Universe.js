const commandInput = document.getElementById("command");
const output = document.getElementById("output");

const commands = {
    help: "Available commands: help, whoami, about, skills, clear",
    whoami: "You are a visitor exploring Mehran's Digital Universe.",
    about: "I'm Mehran, a BCA Cyber Security student interested in technology and business.",
    skills: "Currently learning: Cybersecurity, HTML, CSS and JavaScript."
};

commandInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = commandInput.value.trim().toLowerCase();

        const line = document.createElement("p");
        line.textContent = "guest@mehran:~$ " + command;
        output.appendChild(line);

        const result = document.createElement("p");

        if (command === "clear") {
            output.innerHTML = "";
        } else {
            result.textContent = commands[command] || "Command not found. Type help.";
            output.appendChild(result);
        }

        commandInput.value = "";
    }
});
