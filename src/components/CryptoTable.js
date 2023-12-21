import React, { useState, useEffect } from "react";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const API_KEY = process.env.REACT_APP_COINLAYER_API_KEY;

  useEffect(() => {
    // Define the top 20 cryptocurrencies by their symbols
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

    // Function to fetch historical data
    const fetchHistoricalData = (date) => {
      return fetch(
        `https://api.coinlayer.com/${date}?access_key=${API_KEY}`
      ).then((response) => response.json());
    };

    // Function to calculate 24h change
    const calculateChange = (currentRates, historicalRates) => {
      return topCryptos.map((crypto) => {
        const currentRate = parseFloat(currentRates[crypto]);
        const historicalRate = parseFloat(historicalRates[crypto]);
        const change = ((currentRate - historicalRate) / historicalRate) * 100;
        return {
          name: crypto,
          rate: currentRate ? currentRate.toFixed(2) : "Not available",
          change: !isNaN(change) ? change.toFixed(2) : "Not available",
        };
      });
    };

    // Fetch current rates
    fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((currentData) => {
        // Fetch historical rates from yesterday
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const date = yesterday.toISOString().split("T")[0];
        return fetchHistoricalData(date).then((historicalData) => {
          // Calculate 24h change and update state
          const newData = calculateChange(
            currentData.rates,
            historicalData.rates
          );
          setCryptoData(newData);
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally leaving out API_KEY because it does not change

  return (
    <div className="crypto-table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>24h Change</th> {/* New header */}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.rate}</td>
              <td style={{ color: token.change >= 0 ? "green" : "red" }}>
                {token.change}%
              </td>{" "}
              {/* Display 24h change */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
