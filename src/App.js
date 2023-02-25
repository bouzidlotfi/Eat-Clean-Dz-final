import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
// import Detailsproduct from './Components/Detailsproduct/Detailsproduct';
import Firstpage from './Components/Firstpage/Firstpage';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './Components/Products/Details/Details';
// import Details from './Components/Products/Details';
// import { useContext, useState } from 'react';
// import { GeneralContext } from './context/context';



function App() {


  const HomePage = () => (
    <div id='homePage'>
      <Navbar />
      <Firstpage />
      <About />
      <Products />
      <Contact />
    </div>)


  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/Product/:id' element={<Details/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
