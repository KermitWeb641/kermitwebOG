function createBubbles() {
  const bubblesGroup = document.querySelector('.bubbles');
  const numBubbles = 15;

  for (let i = 0; i < numBubbles; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const size = Math.random() * 100 + 50;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;

    circle.setAttribute('class', 'bubble');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', size);
    circle.setAttribute('fill', 'rgba(255, 255, 255, 0.1)');
    circle.style.animationDelay = `${delay}s`;

    bubblesGroup.appendChild(circle);
  }
}

function createSnowflakes() {
  const snowflakesGroup = document.querySelector('.snowflakes');
  const numSnowflakes = 100;

  for (let i = 0; i < numSnowflakes; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const size = Math.random() * 3 + 2; // Snowflake size
    const x = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight - window.innerHeight; // Start from above the viewport
    const animationDelay = Math.random() * 6; // Slightly varied animation start

    circle.setAttribute('class', 'snowflake');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', startY);
    circle.setAttribute('r', size);
    circle.setAttribute('fill', 'white');
    circle.style.animationDelay = `${animationDelay}s`;

    snowflakesGroup.appendChild(circle);
  }
}

function updateBubblePositions() {
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(bubble => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    bubble.setAttribute('cx', x);
    bubble.setAttribute('cy', y);
  });
}

createBubbles(); 
createSnowflakes();
window.addEventListener('resize', updateBubblePositions);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function openInAboutBlank(url) {
  const win = window.open('about:blank', '_blank');
  if (win) {
    win.document.write(`<iframe width="100%" height="100%" src="${url}" frameborder="0"></iframe>`);
    win.document.body.style.margin = '0';
    const iframe = win.document.querySelector('iframe');
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
  }
}

function openIframe(buttonClass, url) {
  document.querySelector(buttonClass).addEventListener('click', () => {
    openInAboutBlank(url);
  });
}

function handleButtonClicks() {
  openIframe('.links-button', 'https://docs.google.com/document/d/1EpFaMO0seFvap0ImX-LIsPnG3xRHxtuwWRUXj4o6Ox8/edit?tab=t.0');
  openIframe('.chat-room-button', 'https://jazzy-chat-room--saulosalty.on.websim.ai');
  openIframe('.games-button', 'https://empty-html-page--kermit641.on.websim.ai');
  openIframe('.ai-art-button', 'https://pollygen--actuallyusefulstuff.on.websim.ai');
  openIframe('.cloak-button', 'https://animated-background--kermit641.on.websim.ai');
}

handleButtonClicks();

function handleGuideButtonClick() {
  openIframe('.guide-button', 'https://websim.ai/@Kermit641/the-official-kermit-web-guide-for-complete-idiots/');
}

handleGuideButtonClick()

function handleUrlInput() {
  document.querySelector('.open-button').addEventListener('click', () => {
    const url = document.querySelector('.url-input').value;
    if (url) {
      openInAboutBlank(url);
    }
  });

  document.querySelector('.url-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.querySelector('.open-button').click();
    }
  });
}

handleUrlInput()

const spotifyTrigger = document.querySelector('.spotify-menu-trigger');
const spotifyMenu = document.querySelector('.spotify-menu');
const spotifyUrlInput = document.querySelector('.spotify-url-input');
const spotifyEmbedButton = document.querySelector('.spotify-embed-button');
const spotifyContainer = document.querySelector('.spotify-container');

spotifyTrigger.addEventListener('click', () => {
  spotifyMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!spotifyMenu.contains(e.target) && !spotifyTrigger.contains(e.target)) {
    spotifyMenu.classList.remove('active');
  }
});

spotifyEmbedButton.addEventListener('click', embedSpotify);
spotifyUrlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    embedSpotify();
  }
});

function embedSpotify() {
  const url = spotifyUrlInput.value;
  if (!url) return;

  let spotifyUri;
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const type = pathParts[1] || 'track'; 
    const id = pathParts[2];
    spotifyUri = `https://open.spotify.com/embed/${type}/${id}`;
  } catch (e) {
    alert('Please enter a valid Spotify URL');
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = spotifyUri;
  iframe.width = '100%';
  iframe.height = '152';
  iframe.frameBorder = '0';
  iframe.setAttribute('allowtransparency', 'true');
  iframe.allow = 'encrypted-media';

  spotifyContainer.insertBefore(iframe, spotifyContainer.firstChild);
  spotifyUrlInput.value = '';
}

const youtubeTrigger = document.querySelector('.youtube-menu-trigger');
const youtubeMenu = document.querySelector('.youtube-menu');
const youtubeUrlInput = document.querySelector('.youtube-url-input');
const youtubeEmbedButton = document.querySelector('.youtube-embed-button');
const youtubeContainer = document.querySelector('.youtube-container');

youtubeTrigger.addEventListener('click', () => {
  youtubeMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!youtubeMenu.contains(e.target) && !youtubeTrigger.contains(e.target)) {
    youtubeMenu.classList.remove('active');
  }
});

youtubeEmbedButton.addEventListener('click', embedYoutube);
youtubeUrlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    embedYoutube();
  }
});

function embedYoutube() {
  const url = youtubeUrlInput.value;
  if (!url) return;

  let videoId;
  if (url.startsWith('https://www.youtube.com/watch?v=')) {
    videoId = url.split('v=')[1];
    const ampersandIndex = videoId.indexOf('&');
    if (ampersandIndex !== -1) {
      videoId = videoId.substring(0, ampersandIndex);
    }
  } else if (url.startsWith('https://youtu.be/')) {
    videoId = url.split('youtu.be/')[1];
  } else {
    alert('Please enter a valid YouTube URL');
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.width = '100%';
  iframe.height = '315'; 
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

  youtubeContainer.insertBefore(iframe, youtubeContainer.firstChild);
  youtubeUrlInput.value = '';
}

const chromeAppsTrigger = document.querySelector('.chrome-apps-menu-trigger');
const chromeAppsMenu = document.querySelector('.chrome-apps-menu');

chromeAppsTrigger.addEventListener('click', () => {
  chromeAppsMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!chromeAppsMenu.contains(e.target) && !chromeAppsTrigger.contains(e.target)) {
    chromeAppsMenu.classList.remove('active');
  }
});

document.querySelector('.search-button').addEventListener('click', () => {
  const query = document.querySelector('.search-input').value;
  if (query) {
    const bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    const win = window.open('about:blank', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Bing Search</title>
          <style>
            body {
              margin: 0;
              font-family: 'VT323', monospace;
              color: white;
              background-color: #111; /* Dark background for contrast */
              overflow: hidden; /* Prevent scrollbars */
            }
            .container {
              display: flex;
              height: 100vh;
            }
            .sidebar {
              width: 250px; /* Wider sidebar */
              background-color: #222; /* Darker sidebar background */
              padding: 20px;
              box-sizing: border-box;
            }
            .sidebar h2 {
              margin-bottom: 15px;
              color: #ccc;
            }
            .main-content {
              flex-grow: 1;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
            /* Basic sidebar link styling - adjust as needed */
            .sidebar a {
              display: block;
              padding: 10px 0;
              color: #ddd;
              text-decoration: none;
              border-bottom: 1px solid #333; /* Separator for links */
            }
            .sidebar a:hover {
              color: white;
            }
            /* Sidebar search bar styles */
            .sidebar-search-container {
              display: flex;
              margin-bottom: 20px;
            }
            .sidebar-search-input {
              flex-grow: 1;
              background-color: #333;
              color: white;
              border: none;
              padding: 8px;
              border-radius: 15px 0 0 15px; /* Rounded left corners */
            }
            .sidebar-search-button {
              background-color: #555;
              color: white;
              border: none;
              padding: 8px 12px;
              border-radius: 0 15px 15px 0; /* Rounded right corners */
              cursor: pointer;
            }
            .sidebar-search-button:hover {
              background-color: #777;
            }
            .sidebar-instructions { /* New style for instructions */
              font-size: 0.8rem;
              color: #999;
              margin-bottom: 10px;
              line-height: 1.4;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="sidebar">
              <h2>Quick Links</h2>
              <p class="sidebar-instructions">INSTRUCTIONS:<br>Right click the link name,<br>press "Copy Link Address",<br>than enter it into the "Enter URL" bar</p>
              <div class="sidebar-search-container">
                <input type="text" class="sidebar-search-input" placeholder="Enter URL">
                <button class="sidebar-search-button">Go</button>
              </div>
              <!-- Add more sidebar links here -->
            </div>
            <div class="main-content">
              <iframe src="${bingUrl}"></iframe>
            </div>
          </div>
          <script>
            document.querySelector('.sidebar-search-button').addEventListener('click', () => {
              const url = document.querySelector('.sidebar-search-input').value;
              if (url) {
                window.open('about:blank').document.write('<iframe width="100%" height="100%" style="border:none;" src="' + url + '"></iframe>');
              }
            });
            document.querySelector('.sidebar-search-input').addEventListener('keypress', (e) => {
              if (e.key === 'Enter') {
                document.querySelector('.sidebar-search-button').click();
              }
            });
          </script>
        </body>
        </html>
      `);
      win.document.body.style.margin = '0';
    }
  }
});

document.querySelector('.search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('.search-button').click();
  }
});

// Add dark mode toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check if user has a saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
} else if (currentTheme === 'light') {
  document.body.classList.remove('dark-mode');
} else if (prefersDarkScheme.matches) {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Update theme icon based on system preference changes
prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
});

const aiChatDisplay = document.querySelector('.ai-chat-display');
const aiChatInput = document.querySelector('.ai-chat-input');
const aiChatSendButton = document.querySelector('.ai-chat-send-button');
let conversationHistory = [];
let aiPersonality = "You are a friendly assistant."; // Default personality

aiChatSendButton.addEventListener('click', sendMessage);
aiChatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  const message = aiChatInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  aiChatInput.value = '';

  const newMessage = {
    role: "user",
    content: message,
  };
  conversationHistory.push(newMessage);
  // only send the last 10 messages to the language model
  conversationHistory = conversationHistory.slice(-10);

  try {
    const completion = await websim.chat.completions.create({
      messages: [
        {
          role: "system",
          content: aiPersonality,
        },
        ...conversationHistory,
      ],
    });
    const response = completion.content;
    addAiMessage(response);
    conversationHistory.push(completion);

  } catch (error) {
    addAiMessage("Oops, something went wrong. Please try again.");
    console.error("AI Chat Error:", error);
  }
}

function addUserMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('ai-chat-message', 'user');
  messageElement.textContent = message;
  aiChatDisplay.appendChild(messageElement);
  aiChatDisplay.scrollTop = aiChatDisplay.scrollHeight; // Scroll to bottom
}

function addAiMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('ai-chat-message');
  messageElement.textContent = message;
  aiChatDisplay.appendChild(messageElement);
  aiChatDisplay.scrollTop = aiChatDisplay.scrollHeight; // Scroll to bottom
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();

// Automatically open cloak URL on page load
window.addEventListener('load', () => {
  const cloakUrl = 'https://animated-background--kermit641.on.websim.ai';
  const win = window.open('about:blank', '_blank');
  if (!win || win.closed || typeof win.closed=='undefined') {
    // Popup blocked or failed to open
    document.getElementById('popup-blocked-message').classList.add('show'); 
  } else {
    win.document.write(`<iframe width="100%" height="100%" src="${cloakUrl}" frameborder="0"></iframe>`);
    win.document.body.style.margin = '0';
    const iframe = win.document.querySelector('iframe');
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
  }
});

const secretButtonTrigger = document.querySelector('.secret-button-trigger');
const secretMenu = document.querySelector('.secret-menu');

secretButtonTrigger.addEventListener('click', () => {
  secretMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!secretMenu.contains(e.target) && !secretButtonTrigger.contains(e.target)) {
    secretMenu.classList.remove('active');
  }
});