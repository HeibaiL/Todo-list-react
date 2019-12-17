import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    remove = () => {
        const {
            remove,
            data: { id }
        } = this.props;

        remove(id);
    }

    toggleDone = () => {
        const {
            toggleDone,
            data: { id }
        } = this.props;

        toggleDone(id);
    }

    render() {
        const { data: { text, done } } = this.props;
        const icon1 = <i className="fas fa-check-circle icon" key={1} />
        const icon2 =  <i className="far fa-circle icon" key={2} />

        return (
            <div className="todo" onClick={this.toggleDone} >
                {done ? icon1 : icon2}
                <p style={{ textDecoration: done ? "line-through" : "none" }}>
                    {text}
                </p>
                <div className="change">
                    <i class="fas fa-redo-alt icon"></i>
                </div>
                <div className="delete" onClick={this.remove}>
                    <i className="fas fa-times icon delete" />
                </div>
            </div>
        )
    }
}