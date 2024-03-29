import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import 'simplebar-react/dist/simplebar.min.css';
import './assets/scss/style.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <HashRouter>
      <App/>
   </HashRouter>
);


