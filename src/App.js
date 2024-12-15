import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Navigatoin from './components/Navigation';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
          <Navigatoin />
          <Banner title="Banner!" />
          <Footer />
    </div>
  );
}

export default App;
