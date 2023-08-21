import React,{useState} from 'react';

const Counter = () =>{
    const [currentCount, setCurrentCount] = useState(0);
    return(
        <div>
            <h1>Number {currentCount}</h1>
            <button onClick={()=>setCurrentCount(currentCount + 1)}>add1</button>
            <button onClick={()=>setCurrentCount(currentCount - 1)}>substract 1</button>
            <button onClick={()=>setCurrentCount(0)}> reset</button>
        </div>
    )

}

export default Counter;

