import React from "react";
import Header from "./Header";
import {Footer} from "./Footer";
import Main from "./Main";


export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            gotTodo:[]
        }
    }
    getTodos=(todo)=>{
        let myTodo = todo;
        this.setState((state)=>{
            return {
                gotTodo:state.gotTodo.concat(todo)
            }
        })
   
    }
    render(){
        return <div className="app">
            <Header/>
            <Main todos={this.state.gotTodo}/>
            <Footer getTodos={this.getTodos}/>
        </div>
    }
}