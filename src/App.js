import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import {Container} from 'react-bootstrap';
import Upper from'./layouts/Upper';
import Body from './layouts/Body'
import Footer from './layouts/Footer'

function App() {
  return (
    <div>
      <Upper />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
