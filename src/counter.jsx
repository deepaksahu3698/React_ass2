import React from "react"


function Counter({count,increase,decrease,seTcount}){
// console.log(count)
    const double=()=>{
        seTcount(count*2)
    }

    return (<>
    {/* <h1 >{count}</h1> */}
    {count%2===0?<h1 style={{color:"green"}}>Counter:-{count}</h1> : <h1 style={{color:"red"}}>Counter:-{count}</h1>}
    <button onClick={increase}>INCREASE BY 1</button>
    <br />
    <button onClick={decrease}>DECREASE BY 1</button>
    <br />
    <button onClick={double}>DOUBLE</button>
    </>)
}
export default Counter