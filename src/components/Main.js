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
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidUpdate(prevState){
        if(!prevState.todos.length==this.state.todos.length){
            this.todosArr=this.props.todos
            this.setState({todos:this.todosArr})

        }
    }

    handleClick(todo){
    
    }
    render(){
        let todos = this.state.todos.map(todo=>{
            return <Todo onClick={()=>this.handleClick(todo)} getTodo={todo} key={todo.id}/>
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