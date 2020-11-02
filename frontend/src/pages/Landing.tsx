import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/pages/landing.css';
import '../styles/global.css';
import logoImg from '../images/logo.svg';
import markerImg from '../images/map-marker.svg';



function Landing() {
    return(
        <div id="page-landing">

      <motion.div
        className="wrapper-logo-happy"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5, repeat: 1, repeatType: "reverse" }}
      >
        <img src={markerImg} alt="Logo happy" />
      </motion.div>

      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >             
          <img src={logoImg} alt="Happy"/>
   
          <main>
            <h1>Bring happiness to the world</h1>
            <p>Visit orphanages and change the day of many children.</p>
          </main>
  
          <div className="location">
            <strong>São Paulo</strong>
            <span>SP</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0,, 0.6)"/>
          </Link>
       </motion.div>
    </div> 
  );  
}

export default Landing;