import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Sliders from './component/Sliders'
import Footer from './component/Footer'
import Services from './component/Services'

function App() {
  return (
    <div className="App">
      <Navbar/>

      
 <Sliders/>
 <hr></hr>
 <Services/>
 <hr></hr>
 <Footer/>




    </div>
  );
}

export default App;
