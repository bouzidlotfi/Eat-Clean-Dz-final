import './Firstpage.css'

import React from 'react'

function Firstpage() {
  return (
    <div id='firstpage'>
        <div id="firstpageContent">
      <div id='part1'>
        <div id='text1'> <h1>EAT CLEAN</h1> <br/> <p>"Connect To Nature Through Food"</p></div>
        <a href="#About"><button id='discoverBtn'>Discover</button></a>
      </div>
      <div id='part2'>
        <div className='pic pic1'></div>
        <div className='pic pic2'></div>
        <div className='pic pic3'></div>
        <div className='pic pic4'></div>
      </div>
        </div>
    </div>
  )
}

export default Firstpage