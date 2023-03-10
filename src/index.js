import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/Navbar/Navbar.js';

import  TableOne from './Image/Image.js';
import  TableTwo from './Table/Table.js';
import  Rating from './Feedback/Feedback.js';
import  Table from './Components/Card/Card.js';
/*
   React Bootstrap Configuration
*/

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
  <Route path='/table' element={<Table/>} />
  <Route path='/table1' element={<TableOne/>} />
  <Route path='/table2' element={<TableTwo/>} />
  <Route path='/Feedback' element={<Rating/>} />
  </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



