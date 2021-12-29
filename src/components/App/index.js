// == Import
import React, {useState} from 'react';
import { Switch, Route} from "react-router-dom";

// == Components
import Header from 'src/components/Header';
import Play from 'src/components/Play';
import Game from 'src/components/Game';
import Footer from 'src/components/Footer';

// == Style
import './styles.scss';



function App() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);


  return (
    <>
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
