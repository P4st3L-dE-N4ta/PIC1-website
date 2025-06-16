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

// Simulated send text function
sendTextBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) return alert('Please enter some text to send.');

  log(`Sent text: "${text}"`);
  // Simulate received event
  setTimeout(() => {
    log(`Received text: "${text}"`);
    displayContent(text, 'text');
  }, 500);

  textInput.value = '';
});

// Simulated send image function
sendImageBtn.addEventListener('click', () => {
  const file = imageInput.files[0];
  if (!file) return alert('Please select an image to send.');

  const reader = new FileReader();
  reader.onload = () => {
    log(`Sent image: ${file.name} (${Math.round(file.size / 1024)} KB)`);
    // Simulate received event
    setTimeout(() => {
      log(`Received image: ${file.name}`);
      displayContent(reader.result, 'image');
    }, 500);
  };
  reader.readAsDataURL(file);

  imageInput.value = '';
});
