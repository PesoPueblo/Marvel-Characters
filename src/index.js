import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import './styles/index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <App />
    </Router>
  </React.StrictMode>
  
);
