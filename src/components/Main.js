import React, {Component} from "react";
import Todo from "./Todo";
import {Footer} from "./Footer";


export default class Main extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
            todos:[],
            todo:this.props.todoElements
        }
    }
    componentDidUpdate(prevState){
        this.todoElements = this.props.todos;
        this.updateFunction(this.todoElements)
    
    }   
    updateFunction=(el)=>{
        const myTodo = el[el.length-1];
        if(this.state.todos.length!==el.length){
                this.setState((state)=>{
                return {todos:state.todos.concat(myTodo)}
            })
        }
        
    }

    render(){
        let todoToDisplay = this.state.todos.map(todo=>{
            return <Todo getTodo={todo} key ={todo.id}/>
        })
        return(
            <div className = "main">
                <div className = "container">
                  {todoToDisplay}
                </div>
            </div>
        );
    }
}