import React, { Component } from 'react'
import Dropdown from './Dropdown';
import Home from './Home'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      isShow:false,
      selected:"Not Selected",

      items:["Yes","Probably Not","I don't know"]
    } 
  }


  handleMouse=()=>{
    this.setState({
      isShow:true
    })
  }


  handleClick=(item)=>{
    this.setState({
      isShow:false,
      selected:item
    })
  }

  render() {
    return (
      <div className='app'>
        <Home isShow={this.state.isShow} handleMouseEnter={this.handleMouse}/>
        {this.state.isShow?<Dropdown items={this.state.items} handleOnClick={this.handleClick}/>:""}
        <p className='ans-p'>Ans. {this.state.selected}</p>
      </div>
    )
  }
}

