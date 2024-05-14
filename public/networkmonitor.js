// Function to fetch and display JSON response from the server
function fetchAndLogResponse(url, label) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        logToNetworkMonitor(`${label}: ${JSON.stringify(data)}`);
      })
      .catch(error => {
        logToNetworkMonitor(`${label}: Error fetching data - ${error}`);
      });
  }

  // Function to log messages to the network monitor
  function logToNetworkMonitor(message) {
    const networkMonitor = document.getElementById('network-monitor');
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    networkMonitor.appendChild(logEntry);
  }

  // Attach click event listeners to refresh buttons
  document.getElementById('refresh-server').addEventListener('click', () => {
    fetchAndLogResponse('/server/message', 'Server Message');
  });
  document.getElementById('refresh-backend').addEventListener('click', () => {
    fetchAndLogResponse('/script/message', 'Backend Message');
  });
  document.getElementById('refresh-obfuscation').addEventListener('click', () => {
    fetchAndLogResponse('/obfuscation/message', 'Obfuscation Message');
  });
  document.getElementById('refresh-cipher').addEventListener('click', () => {
    fetchAndLogResponse('/cipher/message', 'Cipher Message');
  });
  document.getElementById('refresh-combined').addEventListener('click', () => {
    fetchAndLogResponse('/combined-cipher/message', 'Combined Message');
  });