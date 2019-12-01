import React, { Component } from "react";
import Todo from "./Todo";
import Main from "./Main";

class Footer extends Component{
    constructor(props){
        super();
        this.getTodos=props.getTodos;
        this.state = {
            inputText:"",
            id:0,
        }
    }
    handleInput=(event)=>{
        let {name,value} = event.target;
        this.setState({
                [name]: value
            })
    }
    handleClick=()=>{
        if(this.state.inputText==""){
            return;
        }else{
        this.state.id++;
        let todo={
           text:this.state.inputText,
           id:this.state.id,
           done:false
        }
        this.getTodos(todo)
        this.setState({
            inputText: ""
        })
    }
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
export {Footer};