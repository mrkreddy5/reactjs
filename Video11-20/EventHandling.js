function EventHandling(){
  return (
    <button onClick={Fun}>Click me</button>
  );
}

// after button is clicked alert is popped up
// ----------------------------------------------------------------

function EventHandling(){
  return (
    <button onClick={Fun()}>Click me</button>
  );
}


// pop up is displayed before button is clicked
// -----------------------------------------------------------------

function EventHandling(){
  return (
    <button onClick={() => Fun("ram")}>Click me</button>
  );
}


// after button is clicked alert is popped up
// ------------------------------------------------------------------

function Fun(name){
  return(
    alert("hello " + name)
  )
}

export default EventHandling;






