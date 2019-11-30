import React, { Component } from "react";
import Todo from "./Todo";
import Main from "./Main";

export default class Footer extends Component{
    constructor(){
        super();
        this.main=Main;
        this.state = {
            inputText:"",
            id:0
        }
    }
    handleInput=(event)=>{
        let {name,value} = event.target;
        this.setState({
                [name]: value
            })
    }
    handleClick=()=>{
        let text= this.state.inputText;
        this.setState({
            inputText: ""
        })
        console.log(this.main)
        
    }

    render(){
        return (
        <div className="footer">
            <div className="input"> 
                <input name="inputText" placeholder="What to do?" type="text" value={this.state.inputText} onChange={this.handleInput}/>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        </div>
        )
    }
}
