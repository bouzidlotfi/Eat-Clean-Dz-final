import './Navbar.css'

import React from 'react'

function Navbar() {
  return (
    <div id='navbar'>
        <div id="logo">
            <div id='name'>Eat Clean</div>
        </div>
        <div id="baritems">
            <ul className="navbar-items">
                <a href="#firstpage"><li id='home'>Home page</li></a>
                <a href="#About"><li id='about'>About</li></a>
                <a href="#productTitle"><li id='products'>Products</li></a>
                <a href="#Contacts"><li id='contact'>Contact</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar