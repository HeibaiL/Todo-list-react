import React from "react";

import Header from "./Header";
import {Footer} from "./Footer";
import Main from "./Main";
import { throws } from "assert";


export default class App extends React.Component{
    constructor(){
        super();

        this.state={
            todo:[]
        }
    }
    refreshed=()=>{
        this.setState(state=>({
            todo:state.todo.map(todo=>({
                ...todo,
                deleted:true
            }))
        }))
    }

    getTodos=(todo)=>{
        this.setState((state)=>({
                todo:state.todo.concat(todo)
            }))
    }

    render(){
        return (
        <div className="app">
            <Header refresh = {this.refreshed}/>
            <Main todos={this.state.todo}/>
            <Footer getTodos={this.getTodos}/>
        </div>
        )
    }
}