import React, {Component} from "react";
import Todo from "./Todo";
import {Footer} from "./Footer";


export default class Main extends Component{
    constructor(props){
        super();
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
        let todos = this.state.todos.map(todo=>{
            return <Todo getTodo={this.state.todos} key={todo.id}/>
        })
    
        return(
            <div className="main">
                <div className="container">
                  {todos}
                </div>
            </div>
        );
    }
}