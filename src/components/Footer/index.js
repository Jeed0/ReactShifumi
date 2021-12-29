// == import

import React, { useState } from "react";
//import Modal from "src/components/Modal";

// == Style
import './styles.scss';


const Footer = () => {
    const [modal, setModal] = useState(false);
  
    const toggle = () => {
      setModal(!modal);
    };
  
    return (
      <>
        <footer className="footer">
          <div className="attribution">
            Challenge by Frontend Mentor . Coded by <a href="#">Your Name Here</a>.
          </div>
        </footer>
       
      </>
    );
  };
  
  export default Footer;

