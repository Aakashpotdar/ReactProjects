import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [colors, setColor] = useState("red")

  return (
    <>      
      <div className='w-full h-screen duration-175' style={{backgroundColor:colors}}>
        <div className='fixed flex flex-wrap justify-items-center justify-center bottom-11'>
          <div className='flex flex-wrap gap-2 shoadow-lg justify-center bg-black px-4 py-2.5 rounded-4xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'Red'}}>Red</button>
            <button onClick={()=>setColor("yellow")} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'Yellow'}}>Yellow</button>
            <button onClick={()=>setColor("Black")} className='outline-1 px-3 rounded-2xl ' style={{color:'white', backgroundColor:'Black'}}>Black</button>
            <button onClick={()=>setColor("Orange")} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'Orange'}}>Orange</button>
            <button onClick={()=>setColor("Lightblue")} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'Lightblue'}}>Lightblue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
