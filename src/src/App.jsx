import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
          <div className="">
            <AboutMe />
            </div>
          <div className="col-span-2">
            <Portfolio />
            <Contact />
            <Resume />
            </div>
      </div>

    </>
       
  )
}

export default App
