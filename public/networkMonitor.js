function toggleNetworkMonitor() {
    const networkMonitor = document.getElementById('network-monitor-container');
    networkMonitor.style.display = networkMonitor.style.display === 'none' ? 'block' : 'none';
  }
  
  // Attach click event listener to the toggle button
  document.getElementById('toggle-network-monitor').addEventListener('click', toggleNetworkMonitor);
  
  // Function to update the network monitor content
  function updateNetworkMonitor(data) {
    const networkMonitor = document.getElementById('network-monitor');
    networkMonitor.innerHTML += `<p>${data}</p>`; // Append new data to existing content
  }
  
  // Function to intercept fetch requests and responses
  function interceptFetch() {
    const originalFetch = window.fetch;
    window.fetch = function (url, options) {
      return originalFetch(url, options)
        .then(response => {
          // Display request and response details in the network monitor
          const requestData = `${options.method} ${url}`;
          const responseData = `${response.status} ${response.statusText}`;
          updateNetworkMonitor(`Request: ${requestData}, Response: ${responseData}`);
          return response;
        })
        .catch(error => {
          // Display error details in the network monitor
          updateNetworkMonitor(`Error: ${error}`);
          throw error;
        });
    };
  }
  
  // Function to fetch data periodically
  function fetchDataPeriodically() {
    setInterval(() => {
      fetch('/server/message')
        .then(response => response.json())
        .then(data => {
          // Update the network monitor with fetched data
          updateNetworkMonitor(`Fetched Data: ${JSON.stringify(data)}`);
        })
        .catch(error => {
          // Handle errors if needed
          console.error('Error fetching data:', error);
        });
    }, 5000); // Fetch data every 5 seconds (adjust interval as needed)
  }
  
  // Intercept fetch requests and responses
  interceptFetch();
  
  // Fetch data periodically after page load
  fetchDataPeriodically();