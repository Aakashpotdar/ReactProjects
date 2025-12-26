import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setValue] = useState(9)
  //let counter = 8;
  const addValue = () => {
    if(counter==20){
    console.log("Stop your counting here")}
    else{
    setValue(counter+1);
    }//counter=counter+1;
  }
  const removeValue = () => {
    if(counter>0){
      setValue(counter-1)
    }
    else{console.log('Do not go negative');
    }
      
  }
  return (
    <>
      <h1>My React Project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
