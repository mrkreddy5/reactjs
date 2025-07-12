import './App.css';

function AuthCheck(Component){
  let verified = true
  return (props)=>{
    if(verified){
      return <Component {...props} />
    }

    else{
      return <SignUp/>
    }


    
  }
}

function SignUp(){
  return <h1>Sign Up First</h1>
}

function Login(props){
  return <h1>User {props.name} Logged in </h1>
}

const AuthenticationCheck = AuthCheck(Login)

function App(){

    return(
    <>
      <AuthenticationCheck name="ram"/>
    </>
    )
}

export default App;
