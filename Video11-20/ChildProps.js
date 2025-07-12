import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App name='xyz'>
        <button>like</button>         /* This is children */
        <button>share</button>
        <button>subscribe </button>
    </App>
);

--------------------------------------------------
function App(props){
  console.dir(props);
  return (
    <>
      <h1>Hello</h1>
      <h1>everyone</h1>
      <p>{props.children}</p>
    </>
  );
}

export default App;