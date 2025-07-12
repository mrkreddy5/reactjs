// export let person = {
//   name : "ram",
//   age : 22,
//   place : "Bkpadu"
// }

// let x = 10;

// export default x;

//--> in indexedDB.js file
//import x, {person} from './App.js';

// -------------------------------------------------------

// export let person = {
//   name : "ram",
//   age : 22,
//   place : "Bkpadu"
// }

// let x = 10;

// export default x;

// in app.js ==> import person from ...   => console.log(person) ==> 10
//               import {person} from ... => console.log(person) ==> 10
//                                           console.log()

// --------------------------------------------------

// let person = {
//   name : "ram",
//   age : 22,
//   place : "Bkpadu"
// }

// let x = 10;

// export default x;
// export {person} //---> named export;

// ---------------------------------------------------------------------
// import React from 'react';

function NavBar() {
    return (
        <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        </div>
    );
}

export default NavBar;