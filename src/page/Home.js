import React from 'react';
import '../styles/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menue from '../components/menue'

function Home() {
  return (
    <div>
      <Menue />
    </div>
  );
}

export default Home;
