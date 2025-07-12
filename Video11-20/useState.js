import {useState} from 'react';

function App(){

  let [prodName, updPrice]= useState({
    pname : "hp",
    price : 45000
  });

  return(
    <>
    <p>Company Name : {prodName.pname}</p>
    <h1>Price : {prodName.price}</h1> 
    <input id='prodPrice'/>  
                                           
    <button onClick={()=>{
      let newPrice = document.getElementById('prodPrice').value;
      updPrice({
        ...prodName,                                                                // retrieves existing data of state variable prodName
        price : newPrice
    })}}>

     Change
    </button>
    </>
  )
}

export default App;