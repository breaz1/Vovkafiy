import React from 'react';
import '../styles/index.css'
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
