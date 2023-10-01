import React from 'react';
import '../styles/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menue from '../components/menue'
import MediaLib from '../components/medialib';

function Home() {
  return (
    <div>
      <Menue />
      <MediaLib />
    </div>
  );
}

export default Home;
