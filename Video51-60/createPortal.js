import './App.css';
import ReactDom from 'react-dom';

function App() {
  return (
    <div className="Parent">
      <h2>Parent Component</h2>
      <PopupContenet data='login-success'></PopupContenet>
    </div>
  );
}

function PopupContenet(props){
  return(
    ReactDom.createPortal(
      <>
        <h2>This is pop-up component</h2>
        <p>{props.data}</p>
        <p>Pop-Up Content</p>
      </>, document.getElementById('portal')
    )
  )
}

export default App;


