import React from "react";
import Header from "./Header";
import {Footer} from "./Footer";
import Main from "./Main";

export default class App extends React.Component{
    constructor(){
        super();
        this.gotTodo=[];
        this.state={
            todos:this.gotTodo,
        }
    }
    getTodos=(todo)=>{
        let myTodo = todo
        this.gotTodo.push(myTodo);
        this.setState({todo:[...this.gotTodo]})

    }
    deleteTodo(id){
        console.log(this.state.todos)
        // this.setState((prevState)=>{
        //     return {
        //         todos:prevState.todos.map(todo=>{

        //         })
        //     }
        // })
    }

    render(){
        console.log(this.state.todos)
        return <div className="app">
            <Header/>
            <Main deleteTodo={this.deleteTodo} todos={this.state.todos}/>
            <Footer getTodos={this.getTodos}/>
        </div>
    }
}