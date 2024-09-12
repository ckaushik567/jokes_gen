import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [joke,setJoke] = useState();

  const api = ()=>{
      fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
              .then((res) => res.json())
              .then((data) => setJoke(data.joke));
     }
  
  return (
     <div className="container">
      <div className="main-container">
        <h1>Joke Generator Using React and Joke API</h1>
        <button onClick={()=>api()}>Click to generate a joke</button>
        <p>{joke}</p>
      </div>
     </div>
  )
}

export default App
