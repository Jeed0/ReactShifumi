// == import

import React, { useState } from "react";
import Modal from "src/components/Modal";

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
          Challenge by Frontend Mentor
          . Coded by <a href="#">Jee DO</a>
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;

