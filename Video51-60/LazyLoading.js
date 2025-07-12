import { useState, lazy, Suspense } from 'react';
import './App.css';
// import Form from './Form';


const Form = lazy(() => import ('./Form'));

function App(){

  let [view, setView] = useState(false);

    return(
    <>
      <div className='text-center'>
          <h1>Lazy Loading</h1>
          <button className='btn btn-primary'
            onClick={()=> setView(true)}>Open Form</button>

          {
            view===true && (
            <Suspense>
                <Form/>
            </Suspense> 
            )
          }
        </div>
    </>
    )
}

export default App;



// -------------------------------------------------------------------------

B . Lazy Loading using routing 

<BrowserRouter>
          <Header />
          <Suspense fallback = {<Loading/>}>     // even js code can be used directly useful for large apps <div></div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
          </Suspense>
</BrowserRouter>