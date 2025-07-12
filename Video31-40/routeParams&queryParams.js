import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import './App.css'


function Header(){
  return(
    <div className='Header'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="user">User</Link></li>
        <li></li>
      </ul>
    </div>
  )
}


function App(){
    return(
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='about' element={<About />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='user/:id/:name?' element={<User />}/>
                 
          </Routes>
      </BrowserRouter>
    )
}

export default App;
-------------------------------------------------------------

.Header ul{
  background-color: gray;
  list-style: none;
  display: flex;
  gap : 10px;
  padding: 10px;
  color: yellow;
}

---------------------------------------------------------------------------

import {useParams, useLocation} from 'react-router-dom';


function User(){
    // let RouteParams = useParams();
    // console.log(RouteParams);

    let {id,name} = useParams();
    
    let location = useLocation();
    
    let queryParams = new URLSearchParams(location.search);

    console.log(queryParams);

    let posts = queryParams.get('posts');
    let category = queryParams.get('category');

    

    return(
        <>
            <h1>ID :{id}</h1>
            <h1>Name :{name}</h1>
            <h1>Posts :{posts}</h1>
            <h1>Category :{category}</h1>
        </>
    )
}


export default User;

--------------------------------------------------------------------

url format : http://localhost:3000/user/100/john?posts=100&category=old