export function Attributes (){
  return (
    <div className="attributes">
      Subscribe :
      <input type="checkbox" htmlFor="attributes"></input>
    </div>
  )
}


// the above code will run and print subscription with acheckbox , but in console it will show an error that class 
// and for are invalid properties in DOM , they should be like className and htmlFor



// JSX expressions

export function Attributes (){
  return (
    <div className="attributes">
      4*5;                                                             
      <input type="checkbox" className="attribute" id='attribute'></input>
      <label htmlFor="attribute">Subscribe :</label>
    </div>
  );
}

// ---> need of flower braces ---> mix of html-like code with JS expressions


export function Addition(){
  return (4*5)
}

//----> mentioning flower braces results in error due to valid JS code