import React,{ useState, useRef } from 'react';

import './App.css';


function App(){

  let [email, updateEmail] = useState('');
  // let [password, updatePassword] = useState('');       1) controlled way

  let pswd = useRef();                  //   2) uncontrolled way

  function login(){
    if(email==="" || pswd===""){
      alert("Please fill in all fields");
    }
    else{
      console.log(email)
      console.log(pswd.current.value)
    }
  }
  

    return(
    <>
        <div className="border w-25 mt-5 m-auto p-3">
          <h2 className="text-primary text-center">Login Form</h2>

          <div className="mt-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email}
              onChange= {(e)=>{updateEmail(e.target.value)}} />
          </div>

          {/* <div className="mt-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password}
              onChange= {(e)=>{updatePassword(e.target.value)}} />
          </div> */}

          <div className="mt-3">
            <label>Password</label>
            <input type="password" className="form-control" ref={pswd} />
          </div>

          <div className="mt-3">
            <button type="submit" className="btn btn-primary w-100" onClick={()=>login()}>Login</button>
          </div>

        </div>
    </>
    )
}

export default App;
