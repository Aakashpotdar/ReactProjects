import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-600 text-white rounded-xl'>Tailwind test</h1>
      <div className='content-end float-end'>  <Card UserName='Aakash'/><Card UserName='Potdar'/></div>
    
      
    </>
  )
}

export default App
