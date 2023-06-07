import axios from 'axios'
import {useEffect,useState } from 'react'

import { BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './Routes/home';
import MovieDetails from './Routes/movieDetails';
import { DataProvider } from './utils/api';
import Form from './Routes/form';
function App() {

  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route exact path="/Vite-React-Api-Fetch/" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="form/:id" element={<Form />} />
        </Routes>
      </Router>
    </DataProvider>
  );
  }

export default App
