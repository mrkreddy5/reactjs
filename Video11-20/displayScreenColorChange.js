import './App.css';

function App(){
  return (
    <div className="colorPicker">
      <label>Chanage color :   </label>
      <input type='color' onChange={
        (e)=> {
            document.body.style.background = e.target.value;
        }
      }></input>

    </div>
  )
}

export default App;


// ----------------------------------------------------


// * {
//   margin : 0;
//   padding :0;
//   box-sizing: border-box;
// }

// body {
//   display : flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;

// }


// .colorPicker {
//   display : flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   /* flex-direction: column; */
// }



