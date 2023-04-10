
// get the URL of the JavaScript file
const scriptURL = chrome.runtime.getURL('path/to/your/script.js');

// fetch the file contents
fetch(scriptURL)
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // compute the SHA256 hash of the file contents
    return crypto.subtle.digest('SHA-256', buffer);
  })
  .then(hash => {
    // convert the hash to a hexadecimal string
    const nonce = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    // add the nonce value to your HTML document
    const script = document.createElement('script');
    script.setAttribute('nonce', nonce);
    script.setAttribute('src', scriptURL);
    document.head.appendChild(script);
  })
  .catch(error => console.error(error));
