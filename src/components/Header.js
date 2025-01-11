// components/Header.js
import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1><i>BMW (Bayerische Motoren Werke AG) </i></h1>
      
      
    </header>
  );
};

export default Header;



// <button onClick={toggleDarkMode}>
//         {isDarkMode ? 'Light Mode' : 'Dark Mode'} </button>