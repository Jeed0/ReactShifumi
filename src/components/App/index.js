// == Import
import React from 'react';
import { Switch, Route} from "react-router-dom";

// == Components
import Header from 'src/components/Header';
import Play from 'src/components/Play';
import Game from 'src/components/Game';
//import Modal from 'src/components/Modal';
import Footer from 'src/components/Footer';

// == Style
import './styles.scss';


// == Composant
const App = () => (
  <>
  <div className="container">
    <Header />
      <Switch>
        <Route exact path="/">
          <Play />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
    
    </div>
    <Footer />
  
  </>
);

// == Export
export default App;
