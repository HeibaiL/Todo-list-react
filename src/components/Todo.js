import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.data.text;
        this.state={
            onChange:false,
            todoInput:""
        }
    }

    remove = () => {
        const {
            remove,
            data: { id }
        } = this.props;

        remove(id);
    }

     changeTodo=(e)=>{
         this.setState({onChange: true})
        console.log(e.target.parentElement.previousSibling)

    }
    handleChange=(e)=>{
        const { name,value } = e.target;
        this.setState({
            [name]:value
        })
        this.text=this.state.todoInput;
    }
    submitChange=()=>{
        this.setState({onChange:false})
    }

    toggleDone = (e) => {
        if(e.target.parentElement.className=="change"
        ||
        e.target.parentElement.className=="submitChange"
        ||
        e.target.className=="inputChange"){
            return;
        }else{
            const {
                toggleDone,
                data: { id }
            } = this.props;
            toggleDone(id);
    }
    }

    render() {

        const { data: { done } } = this.props;
        const icon1 = <i className="fas fa-check-circle icon" key={1} />
        const icon2 =  <i className="far fa-circle icon" key={2} />

        return (
            <div className="todo" onClick={this.toggleDone} >
                {done ? icon1 : icon2}
                    {this.state.onChange?<input type="text" className="inputChange" name="todoInput" value={this.state.todoInput||this.text} onChange={this.handleChange} />
                    :
                    <p style={{ textDecoration: done ? "line-through" : "none" }}>
                        {this.text}
                    </p>}
               
                <div className="change" onClick={this.changeTodo}>
                    <i className="fas fa-redo-alt icon"></i>
                </div>
                <div className="delete" onClick={this.remove}>
                    <i className="fas fa-times icon delete" />
                </div>
               {this.state.onChange? <div className="submitChange" onClick={this.submitChange} >
                                        <i className="fas fa-check icon"/>
                                    </div>
                                    :
                                    ""}
                
            </div>
        )
    }
}