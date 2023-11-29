import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name:"welcome",
            value:"guys"
      }
    }
    
    componentWillMount(){
        alert("THis is react js")
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}{this.state.value}</h1>
        <button onClick={this.clicked}>change</button>
        <button  onClick={this.delete}>delete</button>
      </div>
    )
  }
 clicked=()=>{
    this.setState({name:"React Js Lifecycle"})
 }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({name:"Thank you"})
    },5000)
  }

  componentWillUpdate(){
    alert("Willing to update");
  }

  componentDidUpdate(){
      document.getElementById("divs").innerHTML="THis is component Did update"+this.state.value
  }

  shouldComponentUpdate(){
    return true;
  } 

  componentWillUnmount(){
    console.log("You have deleted")
  }

  delete=()=>{
    this.setState({name:false, value:false})
  }
  
}

export default Lifecycle
