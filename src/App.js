import React, {Fragment} from 'react';
import './App.css';
// import Navbar from './components/inc/Navbar';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Home from './components/pages/Home';
// import Aboutus from './components/pages/About';
// import Contactus from './components/pages/Contact';
import SiteRouter from './Router/SiteRouter';

function App() {
  return (
    <Fragment>
      <SiteRouter />
    </Fragment>
  );
}

export default App;
