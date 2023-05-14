import ClickCounter from "./ClickCounter";
import FunnyImgs from "./funny/FunnyImgs";
import Season from "./season/Season";
import 'bootstrap/dist/css/bootstrap.min.css';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { IMG1_URL, IMG2_URL } from "./consts";
import { useState } from "react";


const App = () => {

  

  // const name = "Barel"
  // const name1 = 'Slava'

  const [name1, setName1] = useState('Indira')
  const [name2, setName2] = useState('Koa')

  console.log('Rendering App', name1, name2)

  return (
    <>
      {/* <h1 style={ {color: 'blue'} }>HELLO {name} and {name1}</h1>
      <p>Hi</p> */}

      {/* <Season /> */}
{/* 
      <ClickCounter /> */}

      <FunnyImgs url={IMG1_URL} name={name1}/>
      <FunnyImgs url={IMG2_URL} name={name2}/>
      <button onClick={() => {
        setName1(name1.toUpperCase())
        setName2(name2.toUpperCase())
      }}>SWITCH</button>
    </>
  )
}


export default App;
