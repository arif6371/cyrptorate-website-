// Example JavaScript code to create a dynamic cryptocurrency ticker

// Function to fetch cryptocurrency data
async function fetchCryptoData() {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    return data.data; // Returns an array of cryptocurrency data
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
  }
}

// Function to update the ticker on the webpage
function updateTicker(cryptoData) {
  const tickerContainer = document.getElementById('crypto-ticker');
  tickerContainer.innerHTML = ''; // Clear existing ticker content

  // Create and append ticker items for each cryptocurrency
  cryptoData.forEach(crypto => {
    const tickerItem = document.createElement('div');
    tickerItem.className = 'ticker-item';
    tickerItem.textContent = `${crypto.name}: $${crypto.priceUsd}`;
    tickerContainer.appendChild(tickerItem);
  });
}

// Call the functions to fetch data and update the ticker
fetchCryptoData().then(cryptoData => {
  updateTicker(cryptoData);
});

// Add this HTML element where you want the ticker to appear
// <div id="crypto-ticker"></div>
