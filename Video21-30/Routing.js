import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';


function Header(){
  return(
    <div className='Header'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
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
          </Routes>
      </BrowserRouter>
    )
}

export default App;

-----------------------------------------
function Home(){
    return(
        <h1>This is Home</h1>
    )
}

export default Home;

---------------------------------------------------

function About(){
    return(
        <h1>This is About Us</h1>
    )
}

export default About;

--------------------------------------------------

function Contact(){
    return(
        <h1>This is Contact Us</h1>
    )
}

export default Contact;