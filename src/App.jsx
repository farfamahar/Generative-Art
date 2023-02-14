import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Day1 from './art/Day1'
import Day2 from './art/Day2'
import Day3 from './art/Day3'

function App() {

  const [index,setIndex] = useState(0);

  function incrementIndex(){
    if(index != artArray.length - 1)
    setIndex(prev=>prev+1)
    else
    setIndex(0);
  }

  function decrementIndex(){
    if(index !=0)
    setIndex(prev=>prev-1)
    else
    setIndex(artArray.length - 1);
  }

  const [artArray, setArtArray] = useState([<Day1/>, <Day2/>, <Day3/>])

  return (
    <div className="flex h-screen justify-center items-center flex-col" >
      {artArray[index]}
      <div className='flex flex-row justify-evenly mt-10 w-full'>
      <button onClick={decrementIndex}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </button>
    <button onClick={incrementIndex}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>
      {/* <Day3 className="m-auto"/> */}
      </div>

    </div>
  )
}

export default App
