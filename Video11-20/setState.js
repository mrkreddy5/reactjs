// import React from 'react';

// class App extends React.Component{

//   state = {
//     pname : "hp",
//     price : 45000
//   };

//   render (){
//     return(
//       <>
//         <p>Company Name : {this.state.pname}</p>
//         <h1>Price : {this.state.price}</h1> 
//         <input id='prodPrice'/>  
                                              
//         <button onClick={()=>{
//           let newPrice = document.getElementById('prodPrice').value;
//           this.setState({price : newPrice});
//         }}>

//         Change
//         </button>
//       </>
//   )}
// }

// export default App;


// -------------------------------------------------------------------------------------


/* using Bind : when method which is used to change the variable is defined outside the render separately , this keyword will not work
   for that we used to define a constructor where super method and the method which we want to use will bind that method with class instance
*/

import React from 'react';

class App extends React.Component{

  state = {
    pname : "hp",
    price : 45000
  };

  constructor(){
    super();
    this.priceUpdater = this.priceUpdater.bind(this);
  }

  render (){
    return(
      <>
        <p>Company Name : {this.state.pname}</p>
        <h1>Price : {this.state.price}</h1> 
        <input id='prodPrice'/>  
                                              
        <button onClick={this.priceUpdater}>Change </button>
        
      </>
  )}

  priceUpdater(){
    let newPrice = document.getElementById('prodPrice').value;
    this.setState({
      price : newPrice
    });
  }
}

export default App;