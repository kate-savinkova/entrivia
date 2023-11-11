import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Main.css';
// import App from './App';
// import OffcanvasExample from './Nav.js';
import {BgColorExample, ResponsiveExample} from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BgColorExample />
    <ResponsiveExample />
  </React.StrictMode>
);
