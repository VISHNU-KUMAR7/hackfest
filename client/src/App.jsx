import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./routes/Router"
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
