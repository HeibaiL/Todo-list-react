import React from "react";

export default class Todo extends React.Component{
    constructor(getTodo){
        super(getTodo);
        this.deleteTodo=getTodo.deleteTodo;
        this.state={
            todo: getTodo.getTodo,
            done:getTodo.getTodo.done,
            doneIcon:""
        }
        this.changeState=this.changeState.bind(this)
    }

    changeState(){
        this.setState(prevState=>{
            return {
                done:!prevState.done,
                }
            }
        )

    }
    func=()=>{
        this.deleteTodo(this.state.todo.id)
    }

    render(){
        return (
        <div className="todo" onClick={this.changeState}>
           {this.state.done?<i className="far fa-circle icon"></i>:<i className="fas fa-check-circle icon"></i>}
           <p  style={{textDecoration:this.state.done?"none":"line-through"}}>
                {this.state.todo.text}
            </p>
            <p  onClick={this.func} className="delete">
            <i className="fas fa-times icon"></i>               
            </p>
        </div>
      )
    }
}