// import { useEffect } from "react"

// function App() {

//     useEffect(()=>{
//             console.log("useEffect is called");   /* ==> executed only after completion of component execution */
//     })

//     return(
//         <h1>Hello 
//             {console.log("in return statement")}
//         </h1>
//     )
// }

// export default App;


// ---------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react"

// function App() {

//     let [count, updateCounter] = useState(0);


//     useEffect(()=>{
//             console.log("useEffect is called");
//     }, [count]);                                     /*if [] is not mentioned then it is defined as undefined */

//     return(
//         <>
//             <h1>count : {count}
//                 {console.log("In component")}
//             </h1>
//             <button onClick={()=>{
//                 updateCounter(count + 1);
//             }}>
//                 submit
//             </button>
//         </>

//     )
// }

// export default App;


// -------------------------------------------------------------------------------------------

import { useEffect, useState } from "react"

function App() {

    let [timer, updateTimer] = useState(0);
    let [count, updateCounter] = useState(0);

    useEffect(()=>{
            console.log("useEffect is called");
    }, [timer, count]);                    /*executed whenever these 2 updated*/
    
    // useEffect(()=>{
    //         console.log("useEffect is called");
    // }, []);                             /* executed only once */

    // useEffect(()=>{
    //         console.log("useEffect is called");
    // }, );                                /* executes every time whenever component is re rendered

    return(
        <>
            <h1>timer : {timer} 
                count : {count} 
                {console.log("In component")}
            </h1>
    
            <button onClick={()=>{
                updateTimer(timer + 1);
            }}>
                Increase time
            </button>

            <button onClick={()=>{
                updateCounter(count + 1);
            }}>
                update count
            </button>

            <button>
                submit
            </button>
        </>

    )
}

export default App;