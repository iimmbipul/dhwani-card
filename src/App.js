
import './App.css';
import Input from './components/Input';
import React, { Component } from 'react'

export default class App extends Component {

  state={
    card1:"",
    card2:"",
    card3:"",
    card4:"",
    
  }
  handleCardNumber = (value)=>{
    var data = value.match(/.{1,4}/g);
    console.log(data);
    this.setState({
      card1:data[0],
      card2:data[1] || "",
      card3:data[2] || "",
      card4:data[3] || ""
    })
  }
  
  handleCard1Number=(e)=>{
    if(e.target.value.length>4){
      //console.log(this.first);
      this.handleCardNumber(e.target.value)
    return false
    }
    console.log(e.target.value)
    if(e.target.value.length==4){
      //console.log(this.first);
      this.first.nextSibling.focus()
    }
    if(e.target.value.length==0){
      
    }
    this.setState({
      card1:e.target.value
    })
  }
  handleCard2Number=(e)=>{
    if(e.target.value.length>4){
      //console.log(this.first);
    return false
    }
    console.log(e.target.value)
    if(e.target.value.length==4){
      //console.log(this.first);
      this.second.nextSibling.focus()
     
    }
    if(e.target.value.length==0){
      this.second.previousSibling.focus()
    }
    this.setState({
      card2:e.target.value
    })
  }
  handleCard3Number=(e)=>{
    if(e.target.value.length>4){
      //console.log(this.first);
    return false
    }
    console.log(e.target.value)
    if(e.target.value.length==4){
      //console.log(this.first);
      this.third.nextSibling.focus()
    }
    if(e.target.value.length==0){
      this.third.previousSibling.focus()
    }
    this.setState({
      card3:e.target.value
    })
  }
  handleCard4Number=(e)=>{
    console.log(e.target.value)
    if(e.target.value.length>4){
      //console.log(this.first);
    return false
    }
    if(e.target.value.length==0){
      this.forth.previousSibling.focus()
    }
    this.setState({
      card4:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="card">
          <Input reff={(input)=>{this.first=input}} placeholder="" value={this.state.card1} handleChange={(e)=>this.handleCard1Number(e)}/>
          <Input reff={(input)=>this.second=input} placeholder="" value={this.state.card2} handleChange={(e)=>this.handleCard2Number(e)}/>
          <Input reff={(input)=>this.third=input} placeholder="" value={this.state.card3} handleChange={(e)=>this.handleCard3Number(e)}/>
          <Input reff={(input)=>this.forth=input} placeholder="" value={this.state.card4} handleChange={(e)=>this.handleCard4Number(e)}/>
        </div>
      </div>
    )
  }
}
