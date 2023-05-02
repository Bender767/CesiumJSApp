import { useState, useEffect } from 'react'

import Counter from './components/Counter'
import Caesium from './components/Caesium'
import MainForm from './components/MainForm'
import Locations from './components/Locations'

function App() {

  // JSX
  // some differences from normal HTML
  // 1. className instead of class
  // 2. self-closing tags need the "/>"
  // 3. can only be one parent element
  //      we can use fragments <></>

  let [locations, updateLocations] = useState([])

//only rerenders when location changes

  useEffect(()=>{
    console.log(locations) 
  }, [locations])

  /*
      useEffect(()=>{
        some code to run

        return ()=>{
          code that runs when component is destroyed
        }

      }, [dependency array])

      if no dependency array: runs on mount and any state change
      if blank depency array: runs on mount only

      mount is when the component loads
  */

  return (
    <>
      <div id="left">
        <Caesium />
        <MainForm locationState={[locations, updateLocations]}/>
      </div>
      <div id="right">
        <Locations locationState={[locations, updateLocations]}/>
      </div>
    </>
  )
}

export default App
