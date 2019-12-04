import React, {Component} from "react";
import Todo from "./Todo";
import {Footer} from "./Footer";


export default class Main extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
            todos:[],
            todo:""
        }
    }

    componentDidUpdate(prevState){
        if(!prevState.todos.length==this.state.todos.length){
            this.setState((state)=>{
            return {
                todos: state.todos.concat(this.props.todos)
            }
        }
    )}else{

    }

}
    render(){
        this.gotTodo = this.props.todos
        return(
            <div className = "main">
                <div className = "container">
                  {this.todos}
                </div>
            </div>
        );
    }
}