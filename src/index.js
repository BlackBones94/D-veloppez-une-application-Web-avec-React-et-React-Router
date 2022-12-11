import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Propos from './pages/APropos';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  div{
    font-family: 'Montserrat', sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element= {<Home />}/>
        <Route path = '/propos/' element = {<Propos />}/>
        <Route path = "*" element={<Error />}/>
      </Routes>
      <Footer />  
    </Router>
   
  </React.StrictMode>
);

