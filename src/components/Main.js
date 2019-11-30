import React, {Component} from "react";
import Todo from "./Todo"
import Footer from "./Footer"
export default class Main extends Component{
    constructor(Footer){
        super();
        this.Footer=Footer;
        this.state={
            todos:[{text:"Hello",id:1}],
            renderTodo:[]
        }
    }
    componentDidMount(){
        console.log(this.state.todos)
    }
    makeTodo(){
        this.setState(()=>{
          return {}  
        })
    }
    render(){
        return(
            <div className="main">
                <div className="container" onChange={this.makeTodo}>
                    {this.state.todos.map(todo=>{
                        <Todo todo={todo.text} id={todo.id}/>
                    })}
                </div>

            </div>
        );
    }
}