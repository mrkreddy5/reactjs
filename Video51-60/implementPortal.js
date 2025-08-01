import './App.css';
import { useState } from 'react';
import ReactDom from 'react-dom'

function App() {

  let [showModal, setShowModal] = useState(false);

  function toggleModal(){
    setShowModal(!showModal);
  }

  return (
    <div className="Parent">
      <h2>This is Parent Component</h2>
      <button className="btn btn-primary m-4" onClick={toggleModal}>Open Modal</button>
      {showModal && <Modal close={toggleModal}/>}
    </div>
  );
}

function Modal(props){
  return(
    ReactDom.createPortal(
      <div className='Modal-Overlay'>
        <div className='Modal-Container'>
          <h2>This is Modal Component</h2>
          <p>This is modal component content</p>
          <button className="btn btn-danger" onClick={props.close}>Close Modal</button>
        </div>
      </div>, document.getElementById('portal'))
  )
}

export default App;



// .Modal-Overlay{
//   position: absolute;
//   top : 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .Modal-Container{
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.5);
// }

// .Parent{
//   position: relative;
// }