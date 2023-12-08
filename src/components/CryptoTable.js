import React, { useState, useEffect } from "react";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const API_KEY = process.env.REACT_APP_COINLAYER_API_KEY;

  useEffect(() => {
    // Fetch data from Coinlayer
    fetch(`http://api.coinlayer.com/api/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of cryptocurrencies
        // Extract the top 20 tokens and relevant information
        const top20Tokens = Object.keys(data.rates)
          .slice(0, 20)
          .map((key) => {
            return {
              name: key,
              rate: data.rates[key],
              // Add other relevant data fields here as needed
            };
          });
        setCryptoData(top20Tokens);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Crypto Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            {/* Add additional headers for other data fields */}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((token) => (
            <tr key={token.name}>
              <td>{token.name}</td>
              <td>{token.rate}</td>
              {/* Add additional data fields here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
