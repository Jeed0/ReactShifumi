// imports
import React from 'react'
import { Link } from 'react-router-dom'

// == Style
import './styles.scss';

// images
import Triangle from "src/assets/images/bg-triangle.svg";

const Play = ( {setMyChoice} ) => {

    const setChoice=(e)=>{ 
    setMyChoice(e.target.dataset.id)
    };

    return (
    <div className="play">
            <img src={Triangle} alt="" className="triangle" />
        <div className="items">
            <Link to="/game">
                <div
                    data-id="paper"
                    onClick={setChoice}
                    className="icon icon--paper"
                >paper</div>
            </Link>
            <Link to="/game">
                <div
                    data-id="scissors"
                    onClick={setChoice}
                    className="icon icon--scissors"
                >scissors</div>
            </Link>
            <Link to="/game">
                <div
                    data-id="rock"
                    onClick={setChoice}
                    className="icon icon--rock"
                >rock</div>
            </Link>
        </div>
    </div>
  );
};

export default Play;