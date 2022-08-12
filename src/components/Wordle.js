import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

function Wordle({solution}) {

  const { currentGuess, handleKeyup } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>current guess - {currentGuess}</div>
   );
}

export default Wordle;
