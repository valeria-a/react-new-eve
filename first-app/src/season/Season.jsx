import { useState } from "react";

const Season = () => {

  const [word, setWord] = useState("Summer")

  const handleClick = () => {
    // if (word === 'Summer') {
    //   setWord('Winter')
    // } else {
    //   setWord('Summer')
    // }

    setWord(word === 'Summer' ? 'Winter' : 'Summer')
  }

    return(
        <>
          <h2>{word}</h2>
          {/* <button onClick={() => setWord('Winter')}>
            Change season
          </button> */}
          <button onClick={handleClick}>
            Change season
          </button>
        </>
    )
}

export default Season;