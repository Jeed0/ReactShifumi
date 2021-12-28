// == Import
import React from 'react';

// == Components
import Header from 'src/components/Header';
import Play from 'src/components/Play';
import Game from 'src/components/Game';
import Modal from 'src/components/Modal';
import Footer from 'src/components/Footer';






// == Style
import './styles.scss';

// == Composant
const App = () => (
  <div className="container">
    <Header />
    <Play />
    <Game />
    <Modal />
    <Footer />
  </div>
);

// == Export
export default App;
