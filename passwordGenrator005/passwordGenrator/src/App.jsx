import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(7);
  const [numberAllow,changeState]=useState(false);
  const [charAllow,changeCharAllow]=useState(false);
  const [password,ChangePassword] = useState();

//useRef hook
  const passRef = useRef(null);

  const passwordGenrator = useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllow){
      str+="0123456789";
    }
    if(charAllow){
      str+="!@#$%^&*_+-=~`[]{}:<>?"
    }

    for(let i=1;i<= length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }

    ChangePassword(pass);
  },[length,numberAllow,charAllow,ChangePassword])

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

//useEffect hook

  useEffect(()=>{
    passwordGenrator()
  },[length,numberAllow,charAllow,passwordGenrator])
  return (
    <>
      <h1 className='text-4x1 text-center text-white'>Password Genrator</h1>
      <div className='flex text-center shadow-md rounded-2xl reounded-lg px-4 py-3 my-8 text-center' style={{backgroundColor:'lightgreen'}}>
        <div>
          <input type="text" placeholder='Password' value={password} className='outline-dark'  ref={passRef} style={{backgroundColor:'white', textDecorationColor:'wheat'}}/>
        
        <button className='outline-none text-center hover:bg-blue-600 bg-blue-400 px-3 py-0.5 rounded-2xl shrink-0' onClick={copyPassword}>copy</button>
        </div>
        <div className='mb-6 text-center rounded-2xl'>
        <div className='flex text-sm gap-x-2'>
          <label className="block font-medium mb-2">
              Length: <span className="font-bold">{length}</span>
            </label>
          <div className='flex item-center gap-x-1'>
            <label>Length: <span>{length}</span></label>
            <input type="range" min="7" max="20" className='curser-pointer' value={length} onChange={(a)=>{setLength(a.target.value)}}/>
          </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllow} onClick={(a)=>{changeState((pre)=>!pre)}}/>
            <label>Numbers</label>
          </div>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} onClick={(a)=>{changeCharAllow((pre)=>!pre)}}/>
            <label>Chars</label>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
