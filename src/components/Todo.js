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
    }
    changeState=(event)=>{
        let element = event.target;
        if(element.classList.contains("fa-times")||element.parentElement.classList.contains("fa-times")){
            this.deleteFunc(this.state.id)
        }
        this.setState(prevState=>{ 
            if(prevState.done){
                    return {
                    done:!prevState.done,
                    doneIcon:"fas fa-check-circle icon"
                    }
            }else{
                return {
                    done:!prevState.done,
                    doneIcon:"far fa-circle icon"
                    }
             }
     
            }
        )
    }
    render(){
        let icon = this.state.done? "fas fa-check-circle icon":"far fa-circle icon";
        
        return (
        <div className="todo" onClick={this.changeState}>
           {<i className={icon}></i>}
           <p  style={{textDecoration:this.state.done?"line-through":"none"}}>
                {this.state.text}
            </p>
            <div  className="delete">
            <i className="fas fa-times icon delete"></i>               
            </div>
        </div>
      )
    }
}