import React from 'react';
import './styles/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;