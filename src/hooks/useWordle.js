import { useState } from "react"


const useWordle = (solution) => {

  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  // we want only 6 rows of guesses, so we set the default array at 6 values
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array of object
  const [history, setHistory] = useState([]) // each guess is just a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})


  // format a guess

  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'}
    })

    // find any 'green' letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green'
        // we have to set this particular letter to none
        // because we do not want in the future if a letter is in yellow
        // to double match
        solutionArray[i] = null
      }
    })

    //find any 'yellow' letter = good letter, wrong place
    // you have to take in account the fact that in this case :
    // solution = piped
    // guess = plans
    // so at first step, the first 'p' letter of the solution become null
    // '_iped'
    // consequently the letter p should be firstly detected as green, and then should continue to scan
    // the word, and on the second p, it shouldnt be taken in account (not becoming yellow)
    // as there is already a green for the current tested letter
    formattedGuess.forEach((l,i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
          formattedGuess[i].color = 'yellow'
          solutionArray[solutionArray.indexOf(l.key)] = null
        }
      })

      return formattedGuess
  }

  // add a new guess to the guesses states
  // update isCorrect state if the guess is correct
  // add one to the turn state

  // also prepare the keyboard and highlight keys with the right color

  // please note that we pass guessFormatted as parameter, which is a guess formatted by
  // the function formatGuess()
  const addNewGuess = (guessFormatted) => {
    if (currentGuess === solution) {
    setIsCorrect(true)
    }
    // here we add the guess to the list of guesses (max 6)
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = guessFormatted
      return newGuesses
    })
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    setUsedKeys((prevUsedKeys) => {
      let newKeys = {...prevUsedKeys}
      guessFormatted.forEach((l) => {
        const currentColor = newKeys[l.key]
        if(l.color == 'green') {
          newKeys[l.key] = 'green'
          return
        }
        if(l.color == 'yellow'&& currentColor != 'green') {
          newKeys[l.key] = 'yellow'
          return
        }
        if(l.color == 'grey'&& currentColor != 'green' && currentColor != 'yellow') {
          newKeys[l.key] = 'grey'
          return
        }
      })

      console.log("newkeys", newKeys)
      return newKeys
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess

  const handleKeyup = ({ key }) => {

    if (key === 'Enter') {
      // only add guess if turn < 5
      if (turn > 5) {
        console.log("you have used all your guesses")
        return
      }
      // only if it has not been submitted previously (check the history)
      if (history.includes(currentGuess)) {
        console.log("You have already tried that word")
        return
      }
      // the word should be 5 characters long
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 chars long")
        return
      }
      // so if all tests have been passed we can call the formatGuess function
      // it's not needed to pass the currentGuess value as the value is accessible via
      // the state (cf declaration variable/states above)
      const formatted = formatGuess()
      addNewGuess(formatted)
    }

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


  return {turn, currentGuess, guesses, usedKeys, handleKeyup, isCorrect}

}

export default useWordle;
