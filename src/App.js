import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Results from './pages/Results';
import Profile from './pages/Profile';
import './index.css';
import Faq from "react-faq-component";
import faqdata from './faqdata';

// faq styling & config
const styles = {
  bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: 'black',
  arrowColor: 'black',
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true
};

// home page
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
      <header>
        <h2> welcome to </h2>
        <h1> first date </h1>
      </header>
      <div className="themeBox">
        <h2> This month's theme... </h2>
        <h3> dine-out <span>🍽️</span> </h3>
      </div>
      <div className="countdownBox">
        <img src={require('./assets/hourglass.jpeg')} width="300"/>
        <div className="countdown">
          <div className="countdownTime">
            <div className="days">
              <h5>05</h5>
              <h4>days</h4>
            </div>
            <div className="minutes">
              <h5>23</h5>
              <h4>minutes</h4>
            </div>
            <div className="seconds">
              <h5>10</h5>
              <h4>seconds</h4>
            </div>
          </div>
          <h2>...until next release</h2>
        </div>
      </div>
      <button type="submit" id="notifySignUp">Sign up to be notified</button>


      <div className="faq">
        <Faq
            data={faqdata}
            styles={styles}
            config={config}
        />
      </div>
    </div>
  );
}

export default App;
