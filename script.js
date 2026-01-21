const socket = new WebSocket("wss://echo.websocket.events/");
const chatBox = document.getElementById("chatBox");

socket.onmessage = function(event) {
  const msg = document.createElement("p");
  msg.textContent = "Received: " + event.data;
  chatBox.appendChild(msg);
};

function sendMessage() {
  const input = document.getElementById("messageInput");
  if (input.value !== "") {
    socket.send(input.value);

    const msg = document.createElement("p");
    msg.textContent = "You: " + input.value;
    chatBox.appendChild(msg);

    input.value = "";
  }
}
