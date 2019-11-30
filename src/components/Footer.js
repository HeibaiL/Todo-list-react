import React, { Component } from "react";
import Todo from "./Todo";

export default class Footer extends Component{
    constructor(){
        super();
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
        let todo = <Todo todo={text} id={this.state.id++}/>
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