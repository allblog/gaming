import React from 'react';
import Header from './components/header';
import Routes from './route';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
