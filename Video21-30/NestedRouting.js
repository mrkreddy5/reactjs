import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User, {Profile, Orders} from './User';


function Header(){
  return(
    <div className='Header'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="user">User</Link></li>
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
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='user' element={<User />}>
                  <Route path='profile' element={<Profile />}/>
                  <Route path='orders' element={<Orders />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;


--------------------------------------------------------------------------------


import {Link, Outlet} from 'react-router-dom';


function User(){
    return(
        <>
        <div>
            <ul>
                <li><Link to='profile'>Profile</Link></li>
                <li><Link to='orders'>Orders</Link></li>
            </ul>
        </div>
        <h1>This is user page </h1>
        <Outlet/>
        </>
    )
}


export default User;

export function Profile(){
    return(
        <h1>This is user profile</h1>
    )
}


export function Orders(){
    return(
        <h1>This is orders page</h1>
    )
}