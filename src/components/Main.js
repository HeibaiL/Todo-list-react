import React, {Component} from "react";
import Todo from "./Todo";
import {Footer} from "./Footer";


export default class Main extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
            todos:[],
        }
    }
    componentDidUpdate(prevState){
        this.todoElements = this.props.todos;
        this.updateFunction(this.todoElements)
    
    }  
    deleteFunc=(id)=>{
        this.state.todos.map(todo=>{
            if(todo.id==id){
                todo.deleted=!todo.deleted
            }
        })
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
         this.todoToDisplay = this.state.todos.map(todo=>{
            if(todo.delete){
                return;
            }else{
                return <Todo delete={this.deleteFunc} getTodo={todo} key ={todo.id}/>
            }
            
        })
        return(
            <div className = "main">
                <div className = "container">
                  {this.todoToDisplay}
                </div>
            </div>
        );
    }
}