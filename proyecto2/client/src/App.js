import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import ShowFicha from './components/ShowFicha';
import DisplayHoras from './components/DisplayHoras';
import CreateHora from './components/CreateHora';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<DisplayHoras />} />
        <Route path="/ficha" element={<ShowFicha />} />
        <Route path="/agenda" element={<CreateHora />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
