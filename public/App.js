// // my_project/app.js
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle form submission
// app.post('/submit', (req, res) => {
//     const userInput = req.body.userInput;
//     console.log('User input:', userInput);
// });


// const bodyParser = require('body-parser');

// // Parse form data
// app.use(bodyParser.urlencoded({ extended: true }));
import './App.css';
import './index.css';
import React, {useMemo} from 'react';
import ReactDOM  from 'react-dom';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';

export default function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Start/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/support" element={<Support/>}/>
          <Route path="/stats" element={<Stats/>} />
        </Routes>
      </Router>
    );
  }