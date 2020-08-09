import React from 'react';
import './App.css';
import Routes from './Components/Routes'
import Footer from './Components/FooterLinks'
// import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="App" style={{background:'black'}}>
      {/* <Navbar/> */}
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
