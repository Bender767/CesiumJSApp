// react hooks
// functions that can only be used inside of react components, and start with the word "use"

import { useState } from 'react'

// state = data that when changed, should be reflected in the document
// useState(initialValue) returns an array with two items: [state, stateUpdatingFunction]

function Counter() {

    // const x = useState(0)
    // const myState = x[0]
    // const myStateUpdater = x[1]
    
    const [count, updateCount] = useState(0)
    
    function increment(){
        updateCount(count + 1)
    }
    
    function returnSomething() {
        return 'hi'
    }

    function returnPieter(){
        return <h1>'Heading'</h1>
    }

    // fn()   <-- function call / invocation
    // fn     <-- callback / callback funciton

    return (
        <>
            {count} <button onClick={increment}> + </button>
            <br />
            {returnSomething()}
            {returnSomething()}
            {returnPieter()}
            <h1></h1>
        </>
    )
}


export default Counter


//module
