import { useState } from "react"


const useWordle = (solution) => {

  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array of object
  const [history, setHistory] = useState([]) // each guess is just a string
  const [isCorrect, SetIsCorrect] = useState(false)


  // format a guess

  const formatGuess = () => {

  }

  // add a new guess to the guesses states
  // update isCorrect state if the guess is correct
  // add one to the turn state

  const addNewGuess = () => {

  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess

  const handleKeyup = ({ key }) => {

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }


    if (/^[A-Za-z]$/.test(key)) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }


  return {turn, currentGuess, guesses, handleKeyup}

}

export default useWordle;
