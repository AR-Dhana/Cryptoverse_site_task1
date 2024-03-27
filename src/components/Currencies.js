// components/Currencies.js
import React from 'react';

function Currencies() {
  // Mock data for currencies
  const currencies = [
    {
      name: 'Bitcoin',
      price: '67K',
      marketCap: '1.3T',
      dailyChange: '2.3',
      id: 1,
    },
    // Add more currencies as needed
  ];

  return (
    <section className="currencies">
      {currencies.map(currency => (
        <div className="currency-card" key={currency.id}>
          <h3>{currency.name}</h3>
          <p>Price: {currency.price}</p>
          <p>Market Cap: {currency.marketCap}</p>
          <p>Daily Change: {currency.dailyChange}</p>
          <button>View Markets</button>
          <button>View Exchanges</button>
        </div>
      ))}
    </section>
  );
}

export default Currencies;
