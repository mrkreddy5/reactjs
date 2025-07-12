// function Counter(){
//   let count=0;
//   return(
//     <>
//     <h1>Counter value : {count}</h1>                                           
//     <button onClick={updateCounter}>Click to increase</button>

//     </>
//   )
  
//    /* value displayed on screen will not be updated , but the updated value will displayed in console */


//   function updateCounter(){
//     ++count;
//     console.log(count);
//   }
// }

// export default Counter;

// -----------------------------------------------------------------------

// using useState
// value will be updated 

// import {useState} from 'react';


// function Counter(){
//   let [count, updateCounter]=useState(0);
//   return(
//     <>
//     <h1>Counter value : {count}</h1>                                           
//     <button onClick={()=>{
//       updateCounter(++count)}}
//     >
//     Click to increase
//     </button>
//     </>
//   )
// }


// ----------------------------------------------------------------------------------------------

// using class components 

import React from 'react'

class Counter extends React.Component{
    state = {
        count :0
    }
    render(){
        return(
            <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{
              this.setState({
                count: ++this.state.count});     // ==>  not preferable
            }}>
              Change
            </button>
            </>
        )
    }
}

export default Counter



{/* <button onClick={() => {
          this.setState(prevState => ({
            count: prevState.count + 1
          }));
        }}> */}
