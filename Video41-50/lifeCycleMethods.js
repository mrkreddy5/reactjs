import React from "react";
import './App.css';
import Child from "./Child";


class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      x:10
    }

  }

    render(){
      return(
      <>
        <h1>Class Component</h1>
        <Child data={this.state.x} />
        <button onClick={()=> this.setState({x:this.state.x+10})}>Increase</button>
      </>
      )
    }
}

export default App;


// --------------------------------------------------------------------------------------------------


import React from "react";
import './App.css';


class Child extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      count : 0,
      product : null
    }

    console.log("constructor called")

  }

  static getDerivedStateFromProps(props){
    console.log("get derived")
    return {
      count: props.data + 10
    }
  }

  componentDidMount(){

    console.log("did mount");

    fetch('https://fakestoreapi.com/products/1')
          .then(res=>res.json())
          .then(json=>{
            console.log(json)
            this.setState({...this.state, product: json.title})})
  }

    render(){
      console.log("render")
      return(
      <>
        <h1>Child Component</h1>
        <h2>x : {this.props.data}</h2>
        <h2>count : {this.state.count}</h2>
        <h2>product : {this.state.product}</h2>
      </>
      )
    }
}



// export default Child