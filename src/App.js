import React from 'react';
import './styles/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './page/Home';
import {store} from './store/store'
function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
