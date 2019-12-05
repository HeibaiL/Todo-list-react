import React from "react";

export default class Todo extends React.Component{
    constructor(getTodo){
        super(getTodo);
        this.getTodo = getTodo;
        this.state={
            todo: getTodo.getTodo,
            doneIcon:""
        }
        this.changeState=this.changeState.bind(this)
    }

    changeState(){
        console.log(this.state.todo)
        // this.setState(prevState=>{
        //     return {
        //         done:!prevState.done,
        //         }
        //     }
        // )
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