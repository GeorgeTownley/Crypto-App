import React, { useState, useEffect } from "react";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const API_KEY = process.env.REACT_APP_COINLAYER_API_KEY;

  useEffect(() => {
    // Define the top 20 cryptocurrencies by their symbols
    // Update this list to your preference of top 20 cryptocurrencies
    const topCryptos = [
      "BTC",
      "ETH",
      "XRP",
      "BCH",
      "LTC",
      "ADA",
      "DOT",
      "LINK",
      "BNB",
      "XLM",
      "USDT",
      "DOGE",
      "UNI",
      "AAVE",
      "SOL",
      "EOS",
      "FTT",
      "TRX",
      "FIL",
      "XTZ",
    ];

    // Fetch data from Coinlayer
    fetch(`http://api.coinlayer.com/api/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // Filter out the top 20 tokens from the data
        const filteredData = topCryptos.map((crypto) => {
          // Use toFixed to format the rate to two decimal places
          // Parse the rate to a float in case it's returned as a string
          const rate = parseFloat(data.rates[crypto]);
          return {
            name: crypto,
            rate: rate ? rate.toFixed(2) : "Not available",
          };
        });

        // Update state with the filtered data
        setCryptoData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="crypto-table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            {/* Add additional headers for other data points here */}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.rate}</td>
              {/* Add additional data points here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
