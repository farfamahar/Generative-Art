import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Day1 from './art/Day1'
import Day2 from './art/Day2'

function App() {

  return (
    <div className="flex h-screen justify-center items-center" >
      {/* <Day1 className="m-auto"/> */}
      <Day2 className="m-auto"/>
    </div>
  )
}

export default App
