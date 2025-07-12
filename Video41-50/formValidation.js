import React,{ useState, useRef } from 'react';
import './App.css';


function App(){

  let [email, updateEmail] = useState('');
  let [password, updatePassword] = useState('');

  // let pswd = useRef();

  let [errors, updateErrors] = useState({
    email : "",
    password : ""
  })

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function login(){
    if(email.trim()===""){
      updateErrors((errors)=>({...errors, email:"enter email"}))
    }
    else if(!emailPattern.test(email)){
      updateErrors((errors)=>({...errors, email:"enter valid email"}))
    }
    else{
      updateErrors((errors)=>({...errors, email:""}))
    }


    if(password.trim()===""){
      updateErrors((errors)=>({...errors, password:"enter password"}))
    }
    else if(password.length<8){
      updateErrors((errors)=>({...errors, password:"enter password of minimum 8 characters"}))
    }
    else{
      updateErrors((errors)=>({...errors, password:""}))
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
              {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className="mt-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password}
              onChange= {(e)=>{updatePassword(e.target.value)}} />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          {/* <div className="mt-3">
            <label>Password</label>
            <input type="password" className="form-control" ref={pswd} />
          </div> */}

          <div className="mt-3">
            <button type="submit" className="btn btn-primary w-100" onClick={()=>login()}>Login</button>
          </div>

        </div>
    </>
    )
}

export default App;
