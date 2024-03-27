// components/Header.js
import React from 'react';
import SearchDropdown from './SearchDropdown';

function Header() {
  return (
    <header className="header">
      <div className="logo">Cryptoverse</div>
      <SearchDropdown />
    </header>
  );
}

export default Header;
