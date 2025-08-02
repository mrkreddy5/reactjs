import {useReducer} from 'react';

function App(){

    function counterUpdater(state, input){
        console.log(state, input);
        return state+input;
    }

    const [counter, dispatch] = useReducer(counterUpdater,0);

    return(
        <div className='d-flex align-items-center'>
            <button onClick={()=>{dispatch(-1)}} className='btn btn-danger m-2'>-</button>
            <h2>Count : {counter}</h2>
            <button onClick={()=>{dispatch(+1)}} className='btn btn-primary m-2'>+</button>
        </div>
    )
}

export default App;