import React from 'react';
import '../styles/App.css';
import Gallery from '../components/Charact';
import Details from '../components/details';
import { Routes ,Route } from 'react-router-dom';

function App(){
  
    return (
      <Routes>
        <Route path='/' element={<Gallery/>}></Route>
        <Route path='/:id' element={<Details/>}></Route>
      </Routes>
    )
  
}

export default App;
