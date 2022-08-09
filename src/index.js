import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
  </BrowserRouter>
);


