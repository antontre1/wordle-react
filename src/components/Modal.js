import React from 'react'

export default function Modal({ isCorrect, turn, solution}) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>Tu as Gagné !</h1>
          <p className="solution">{solution}</p>
          <p>Tu as trouvé la solution en {turn} tours !</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Tu as Perdu !</h1>
          <p className="solution">{solution}</p>
          <p>Tu auras plus de chance la prochaine fois !</p>
        </div>
      )}
    </div>
  )
}
