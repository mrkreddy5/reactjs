A. Accessing DOM elements

import {useRef} from 'react'

function App(){

  const input = useRef(null);

  const FocusInput= () => {
    input.current.focus();
  }

  return(
    <>
      <input type='text' ref={input}></input>
      <button onClick={FocusInput}>Focus input</button>
    </>
  )
}

export default App;


// -----------------------------------------------------------------------------

import {useRef} from 'react'
import './App.css'

function App(){

  const input = useRef(null);
  // console.log(input);

  

  return(
    <>
      <h1 ref ={input} className='active'>Hello everyone</h1>
      <button onClick={()=> {
        input.current.classList.toggle('active')
        input.current.classList.toggle('inactive')
      }}>
        click
      </button>

    </>
  )
}

export default App;


// .active{
//   background-color: blue;
//   color: red;
// }

// .inactive{
//   color: white;
//   background-color: black;
// }


// ------------------------------------------------------------------------------

import {useRef, useState} from 'react'
import './App.css'


function App(){

  const x = useRef(10);
  let [y, updateY] = useState(100); 

  return(
    <>
      {/* <h1 ref ={input} className='active'>Hello everyone</h1> */}

      <h1>x value : {x.current} </h1>
      <button onClick={()=> {
        x.current = x.current + 10;
        y = y+10;
        updateY(y);
        console.log(x.current)
      }}>
        click
      </button>

    </>
  )
}

export default App;

// ____________________________________________________________________

// referring multiple headings in a single variable using array 

import {useRef} from 'react'
import './App.css'

function App(){

  let headings = useRef([]);
  console.log(headings);
  console.log(headings.current);

  function addStyle(e){
    for(let ele of headings.current){
      ele.classList.remove('primary');
    }
    e.target.classList.add('primary');
  }
  
  return(
    <>
      <h1 ref={(e)=> headings.current[0]=e}  onClick={(e)=>addStyle(e)}>Heading 1</h1>
      <h1 ref={(e)=> headings.current[1]=e}  onClick={(e)=>addStyle(e)}>Heading 2</h1>
      <h1 ref={(e)=> headings.current[2]=e}  onClick={(e)=>addStyle(e)}>Heading 3</h1>
  
    </>
  )
}

export default App;


// .primary{
//   background-color: blue;
//   color: white;
//   cursor: pointer;
// }


// ------------------------------------------------------------------------------------------------

// add buttons to scroll the screen to particular section of content


import {useRef} from 'react'
import './App.css'

function App(){

  let headings = useRef([]);
  
  function selectSection(e){
    headings.current[e-1].scrollIntoView({behavior: 'smooth'})
  }
  
  
  return(
    <>
      <div style={{ position: 'fixed', top: 10, background: '#fff', padding: '10px' }}>
        <button onClick={() => selectSection(1)}>Section 1</button>
        <button onClick={() => selectSection(2)}>Section 2</button>
        <button onClick={() => selectSection(3)}>Section 3</button>
      </div>

      <div ref={(e)=> headings.current[0]=e} className='section'>
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
         The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe. 
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
         The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.</div>

      <br />

      <div ref={(e)=> headings.current[1]=e} className='section'>
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
         The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe. </div>
        
       <br />

      <div ref={(e)=> headings.current[2]=e} className='section'>
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
         The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
        The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe.
         The rain came down in sheets, blurring the familiar streets into a watercolor wash. I hurried along, pulling my coat tighter against 
        the chill, the rhythmic drumming of the downpour a counterpoint to the frantic beat of my own heart. It wasn't just the weather; 
        it was the weight of the day, the culmination of a series of minor setbacks that had slowly eroded my usual optimism. 
        Each step forward felt like pushing against a strong current, and I longed for the sanctuary of home, for the warmth of a familiar embrace. 
        The city, usually a vibrant tapestry of lights and sounds, seemed to press in on me, its energy a stark contrast to the quiet ache within. 
        I just wanted to be somewhere else, somewhere quiet, somewhere safe. </div>
        
       <button onClick={()=> selectSection(1)}>Section 1</button>
      <button onClick={()=> selectSection(2)}>Section 2</button>
      <button onClick={()=> selectSection(3)}>Section 3</button>



  
    </>
  )
}

export default App;



