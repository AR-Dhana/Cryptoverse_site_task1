// components/Main.js
import React from 'react';
import Home404 from './Home404';
import Currencies from './Currencies';
import ReferenceCurrencies from './ReferenceCurrencies';

function Main() {
  return (
    <main>
      {/* Depending on the route or user selection, render appropriate components */}
      {/* For now, rendering placeholders */}
      <Home404 />
      <Currencies />
      <ReferenceCurrencies />
    </main>
  );
}

export default Main;
