import React from 'react'
import './HomePage.css'
import DropDown from '../common_components/DropDown';

const HomePage = () => {
  return (
    <>
      <div className='body'>

        <header className='header boxBorder'>
          <DropDown />
        </header>

        <aside className='aside boxBorder'></aside>

        <main className='main boxBorder'></main>

        <footer className='footer boxBorder'></footer>

      </div>

    </>
  )
}

export default HomePage;
