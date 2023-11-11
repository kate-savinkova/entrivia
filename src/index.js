import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Main.css';
// import { App } from './App';
import { NavBar } from './Nav.js';
import {MainPage} from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <MainPage />
  </React.StrictMode>
);
