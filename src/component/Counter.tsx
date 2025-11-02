

import {useState} from 'react'; 
function Counter(){
    const [count, setCount] = useState(0);
    const addFive = () => {
        setCount(count+5);
        //count+5.  ==> dont do it, count is protected and only way to change is by setCount
    }
    return(
        <div>
            <h2>Counter One</h2>
            <h3>count: {count}</h3>
            <div>
                <button onClick={()=> setCount(count+1)}> Increment</button>
                <button onClick={()=> setCount(count-1)}>Decrement</button>
                <button onClick={()=> setCount(0)}>Reset</button>
                <button onClick={addFive}> Add Five</button>
                <button onClick={() => setCount((prevCount) => prevCount + 10)}> Add 10</button>
            </div>
   
               <h2>Counter Two</h2>
            <h3>count: {count}</h3>
            <div>
                <button onClick={()=> setCount(count-1)}> Add -1</button>
                <button onClick={()=> setCount(count-1)}>Substract -1</button>
                <button onClick={()=> setCount(0)}>Reset</button>

            </div>     
        </div>
    )
}
export default Counter;