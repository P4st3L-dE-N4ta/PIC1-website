// live-panel.js

const displayArea = document.getElementById('display-area');
const logMessages = document.getElementById('log-messages');
const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('image-input');
const sendTextBtn = document.getElementById('send-text-btn');
const sendImageBtn = document.getElementById('send-image-btn');

function log(msg) {
  const timestamp = new Date().toLocaleTimeString();
  const entry = document.createElement('div');
  entry.textContent = `[${timestamp}] ${msg}`;
  logMessages.appendChild(entry);
  logMessages.scrollTop = logMessages.scrollHeight;
}

// Display received text or image in the display area
function displayContent(content, type) {
  displayArea.innerHTML = ''; // clear
  if (type === 'text') {
    const p = document.createElement('p');
    p.textContent = content;
    p.style.whiteSpace = 'pre-wrap';
    displayArea.appendChild(p);
  } else if (type === 'image') {
    const img = document.createElement('img');
    img.src = content;
    displayArea.appendChild(img);
  }
}

sendTextBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) return alert('Please enter some text to send.');

  // Show preview immediately
  displayContent(text, 'text');

  // Removed receiving logic because we will
  // not be receiving anything back on the website
  // website websocket client (AMAQUINA) -> python websocket server (AMAQUINA) -> python websocket client (Laptop TIC)
  

  // NEW - connect to python server
  const sock = new WebSocket("ws://localhost:5555");
  log("connected to python server");

  // When the connection opens, send the text
  sock.addEventListener("open", (event) => {
    sock.send(text);
    log(`Sent text: "${text}"`);
  });

  textInput.value = '';
});

// Send image function
sendImageBtn.addEventListener('click', () => {
  const file = imageInput.files[0];
  if (!file) {
    alert('Please select an image to send.');
    return;
  }

  const maxSize = 15 * 1024; // 15 KB
  if (file.size > maxSize) {
    alert('Image too large! Max 15 KB allowed.');
    imageInput.value = '';
    return;
  }

  const sock = new WebSocket("ws://localhost:5555");
  sock.binaryType = "arraybuffer"; // IMPORTANT: receive/send binary data

sock.addEventListener("open", () => {
    const reader = new FileReader();
    reader.onload = () => {
      sock.send(reader.result);  // Send binary data
      log(`Sent image: ${file.name} (${Math.round(file.size / 1024)} KB)`);

      // Show preview immediately by converting ArrayBuffer to base64 data URL
      const base64String = arrayBufferToBase64(reader.result);
      const dataUrl = `data:${file.type};base64,${base64String}`;
      displayContent(dataUrl, 'image');
    };
    reader.readAsArrayBuffer(file);
  });

  imageInput.value = '';
});


// Helper function to convert ArrayBuffer to Base64 string
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}