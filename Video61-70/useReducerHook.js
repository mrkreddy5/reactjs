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


// -----------------------------------------------------------------------------------

import {useReducer} from 'react';

function App(){

    function counterUpdater(state, action){
        switch(action.type){
            case 'INC': return state + action.payload;
            case 'DEC': return state + action.payload;
            case 'RESET': return 0;
            default : return state;
        }
    }

    const [counter, dispatch] = useReducer(counterUpdater,0);

    return(
        <div className='d-flex align-items-center'>
            <button onClick={()=>{dispatch({type : "DEC", payload : -1})}} className='btn btn-danger m-2'>-</button>
            <h2>Count : {counter}</h2>
            <button onClick={()=>{dispatch({type : "INC", payload : 4})}} className='btn btn-primary m-2'>+</button>

            <button onClick={()=>{dispatch({type : "RESET"})}} className='btn btn-primary m-2'>RESET</button>
        </div>
    )
}

export default App;