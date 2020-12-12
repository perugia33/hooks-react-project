import './TeaComponent.css';
import React, {useState, useEffect} from 'react'

function CounterComponent (props){
    useEffect (() =>{
        console.log("Component did mount");
    })

    const [count, setCount] = useState(props.count);
        return (
            <div className = "container">
               <h1>{props.item}</h1>
               <h2> Starting Count: {count} </h2>  
               <h2> Count Rate: {props.increment}</h2>

               <button onClick= {()=> setCount (count + props.increment)} > + </button>   
               <button onClick= {()=> setCount (count - props.increment)} > - </button>
               <button onClick= { ()=> setCount (props.count)}> Reset </button>
            </div>
        )
}



export default CounterComponent;
