import React from "react";

export default class Todo extends React.Component{
    constructor(getTodo){
        super(getTodo);
        this.doneIcon="far fa-circle icon"
        this.changeState=this.changeState.bind(this);
        this.state={
            todo: getTodo.getTodo,
            done:getTodo.getTodo.done
        }
    }
    changeState(){
        this.setState({done:!this.state.done})
        this.doneIcon=this.state.done?<i className="fas fa-check-circle icon"></i>:<i className="far fa-circle icon"></i>
        console.log(this.doneIcon)

    }

    render(){

        return (
        <div className="todo" onClick={this.changeState}>
           {this.doneIcon}
            <p>
                {this.state.todo.text}
            </p>
            <p>
            <i className="fas fa-times icon"></i>               
            </p>
        </div>
      )
    }
}