import {useState} from 'react';
import './App.css';

function App(){
  let [count, countChanger] = useState(0);
  let stock =10;
  return (
    <div className="counterBox">
     
      <button id="decrease" disabled={count==0} onClick= {
        ()=>{
          if(count>0){
            countChanger(--count)
          }
        }
      }>
      -
      </button>
      <p>{count}</p>
      <button id = "increase" disabled={count==stock} onClick= {
        () => {
          if(count<stock){
            countChanger(++count)
          }
        }
      }>
      +
      </button>
    </div>
  )
}

export default App;

// -------------------------------------------------------------------------------------------------------


// * {
//   margin : 0;
//   padding :0;
//   box-sizing: border-box;
// }

// body {
//   display : flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;            ==. vh : applied to the full screen %

// }

// #decrease{
//   background-color: red;
// }

// #increase{
//   background-color: green;
// }

// .counterBox {
//   display : flex;
//   justify-content: center;
//   align-items: center;
//   gap : 10px;
// }

// .counterBox button {
//   border: none;
//   outline: none;
//   padding: 10px;
//   color : white;
//   cursor: pointer;
// }

// button:disabled{
//   opacity: 0.5;
//   cursor : not-allowed;
// }