import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from './Grid'
import Keypad from "./Keypad";

// most of the logic of the game will be here

function Wordle({solution}) {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn } />
      <Keypad />
    </div>
   );
}

export default Wordle;
