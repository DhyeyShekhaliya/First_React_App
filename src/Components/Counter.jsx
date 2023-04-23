import React from "react"

export default function Counter(){
    //let count = 0
    const [count,setCount] = React.useState(0)

    function incrementCounter(){
        //count = count+ 1
        setCount(count+1)
        console.log(count)
    }
    function IncrementReset(){
        
        setCount(count == 0)
        console.log(count)
    }





    return (

     <div>
       <h1 align="center">Counter</h1>

       <h2 align="center">Current valu of count is :{count}</h2>

       <button onClick={incrementCounter}>Click to increment</button>
       <button onClick={IncrementReset}>Restet </button>
     </div>
    )
}