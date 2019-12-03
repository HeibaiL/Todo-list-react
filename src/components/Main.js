import React, {Component} from "react";
import Todo from "./Todo";
import {Footer} from "./Footer";


export default class Main extends Component{
    constructor(props){
        super();
        this.deleteTodo=props.deleteTodo;
        this.props=props;
        this.state={
            todos:this.props.todos,
            todosArr:[]
        }
    }
    componentDidUpdate(prevState){
        if(!prevState.todos.length==this.state.todos.length){
            this.todosArr=this.props.todos
            this.setState({todos:this.todosArr})

        }
    }
    
    render(){
        this.todos = this.state.todos.map(todo=>{
            return <Todo deleteTodo={this.deleteTodo} getTodo={todo} key={todo.id}/>
        })
    
        return(
            <div className="main">
                <div className="container">
                  {this.todos}
                </div>
            </div>
        );
    }
}