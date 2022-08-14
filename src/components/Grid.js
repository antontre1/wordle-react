import React from 'react'
import Row from './Row'

export default function Grid( {guesses, currentGuess, turn} ) {
  return (
    <div>
      { guesses.map((g,i) => {
        // we want to show the currentGuess (meaning what we are currently writting)
        // so if wwe are at the turn = 2, we are showing the classic Row for 0 and 1
        // and when we reach the turn (2) of the current guess
        // we show the currentGuess
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} />
      })}
    </div>
  )
}
