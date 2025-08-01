// App.js
import './App.css';
import PropTypes from 'prop-types';

function User(props) {
   
  return (
    <>
      <h2>Hello {props.name}</h2>
      <h2>{props.name}'s age is {props.age}</h2>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

User.defaultProps = {
  name: "N.A",
  age: 0  
};

function App() {
  return (
    <div className="App">
      <User name="ram" age={20}/> 
    </div>
  );
}

export default App;


