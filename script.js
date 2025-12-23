const avatar = document.getElementById("avatar");
const windowEl = document.getElementById("window");
const messagesEl = document.getElementById("messages");
const openInputBtn = document.getElementById("openInput");
const input = document.getElementById("textInput");

// STORAGE
let messages = JSON.parse(localStorage.getItem("messages")) || [];

// OPEN WINDOW
avatar.addEventListener("click", () => {
  windowEl.classList.remove("hidden");
  renderMessages();
});

// CLOSE WINDOW (click outside content)
windowEl.addEventListener("click", (e) => {
  if (e.target === windowEl) {
    windowEl.classList.add("hidden");
    input.classList.add("hidden");
  }
});

// OPEN INPUT
openInputBtn.addEventListener("click", () => {
  input.classList.remove("hidden");
  input.focus();
});

// SAVE MESSAGE
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (input.value.trim() === "") return;

    const message = {
      text: input.value,
      time: new Date().toLocaleTimeString()
    };

    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));

    input.value = "";
    input.classList.add("hidden");
    renderMessages();
  }
});

// RENDER
function renderMessages() {
  messagesEl.innerHTML = "";
  messages.forEach(m => {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = `${m.time} — ${m.text}`;
    messagesEl.appendChild(div);
  });
}
