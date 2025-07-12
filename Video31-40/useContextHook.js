import './App.css'
import { createContext } from 'react';
import Home from './Home'

export const context = createContext();

function App(){

  let p1 ={
    name: 'John',
    age: 25,
    isAdmin : true
  }

  let p2  ={
    name: 'ram',
    age: 25,
    isAdmin : true
  }

  return(
    <>
      <context.Provider value={{ p1, p2 }}>
        <Home></Home>
      </context.Provider>
    </>
  )
}

export default App;


// -------------------------------------------------------

import About from './About'

function Home(){
    return(
        <>
            <h1>This is home</h1>
            <About></About>
        </>
    )
}

export default Home;

// _______________________________________________

import Contact from './Contact'

function About(){
    return(
        <>
            <h1>This is About Us</h1>
            <Contact></Contact>
        </>
    )
}

export default About;

// -------------------------------------------------------

import { useContext } from "react";
import { context } from "./App";

function Contact(){

    let {p1,p2} = useContext(context);
    return(
        <>
            <h1>This is Contact Us</h1>
            <p>Name : {p2.name}</p>
            <p>Age : {p1.age}</p>
            <p>Is admin : {p1.isAdmin.toString()}</p>

        </>
    )
}

export default Contact;