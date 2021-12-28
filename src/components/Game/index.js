// == imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// == Style
import './styles.scss';

const Game = ({ score, myChoice, setScore }) => {
    
    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random() * 3)]);
      };

      useEffect(() => {
        newHousePick();
      }, []);
    
    return (
        <div className="game">
        my choice: {myChoice} <br/>
        house choice: {house} <br/>
        </div>
    );
    };

export default Game;