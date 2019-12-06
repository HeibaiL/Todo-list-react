import React from "react";

export default class Todo extends React.Component{
    constructor(getTodo){
        super(getTodo);
        this.getTodo = getTodo;
        this.deleteFunc = this.getTodo.delete;
        this.state={
            text:getTodo.getTodo.text,
            id:getTodo.getTodo.id,
            done:getTodo.getTodo.done,
            deleted:getTodo.getTodo.done,
            doneIcon: ""
        }
        this.changeState=this.changeState.bind(this)
    }
    changeState(event){
        let element = event.target;
        if(element.classList.contains("fa-times")||element.parentElement.classList.contains("fa-times")){
            this.deleteFunc(this.state.id)
            this.setState(state=>{
                return {
                    deleted:!state.deleted}
                }
                )

        }
        this.setState(prevState=>{ 
            if(prevState.done){
                    return {
                    done:!prevState.done,
                    doneIcon:<i className="fas fa-check-circle icon"></i>
                    }
            }else{
                return {
                    done:!prevState.done,
                    doneIcon:<i className="far fa-circle icon"></i>
                    }
             }
     
            }
        )
    }
    render(){
        let icon = this.state.doneIcon
        return (
        <div className="todo" onClick={this.changeState}>
        {<i className={icon}></i>}
           <p  style={{textDecoration:this.state.done?"none":"line-through"}}>
                {this.state.text}
            </p>
            <div  className="delete">
            <i className="fas fa-times icon delete"></i>               
            </div>
        </div>
      )
    }
}