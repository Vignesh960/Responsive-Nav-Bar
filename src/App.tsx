import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="" ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
