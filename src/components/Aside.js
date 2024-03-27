// components/Aside.js
import React from 'react';

function Aside() {
  return (
    <aside className="aside">
      <div className="logo">Cryptoverse</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Currencies</li>
          <li>Reference Currencies</li>
          <li>News</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
