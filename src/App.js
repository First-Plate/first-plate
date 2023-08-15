import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Results from './pages/Results';
import Profile from './pages/Profile';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Login} />
        <Route path='/about' component={Results} />
        <Route path='/events' component={Profile} />
      </Routes>
    </Router>
        <h2> welcome to </h2>
        <h1> first plate </h1>
    </div>
  );
}

export default App;
