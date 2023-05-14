import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Season from './season/Season';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => {

//   // let word = "Summer"
//   const [word, setWord] = useState("Summer")

//   const clickHandler = () => {
//     // word = "Winter"
//     setWord("Winter")
//     console.log('clicked', word)
//   }

//   return(
//     <>
//       <h2>{word}</h2>
//       <button onClick={clickHandler}>Change season</button>
//     </>
//   )

// }

const App = () => {
  return(
    <Season />
  )
}

export default App;
