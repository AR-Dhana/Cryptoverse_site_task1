// components/ReferenceCurrencies.js
import React from 'react';

function ReferenceCurrencies() {
  // Mock data for reference currencies
  const coinReferenceCurrencies = [
    { name: 'Bitcoin', symbol: 'BTC', sign: '₿', id: 1 },
    { name: 'Ethereum', symbol: 'ETH', sign: 'Ξ', id: 2 },
    // Add more reference currencies as needed
  ];

  const fiatReferenceCurrencies = [
    { name: 'US Dollar', symbol: 'USD', sign: '$', id: 1 },
    { name: 'Euro', symbol: 'EUR', sign: '€', id: 2 },
    // Add more reference currencies as needed
  ];

  return (
    <section className="reference-currencies">
      <h2>Coin Reference Currencies</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Sign</th>
          </tr>
        </thead>
        <tbody>
          {coinReferenceCurrencies.map(currency => (
            <tr key={currency.id}>
              <td>{currency.id}</td>
              <td>Avatar Placeholder</td>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>
              <td>{currency.sign}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Fiat Reference Currencies</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Sign</th>
          </tr>
        </thead>
        <tbody>
          {fiatReferenceCurrencies.map(currency => (
            <tr key={currency.id}>
              <td>{currency.id}</td>
              <td>Avatar Placeholder</td>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>
              <td>{currency.sign}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ReferenceCurrencies;
