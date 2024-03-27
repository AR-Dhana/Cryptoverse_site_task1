// App.js
import React from 'react';
import './styles.css'; // Import CSS file
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
