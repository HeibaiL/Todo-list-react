import React, { Component } from "react";

import Todo from "./Todo";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        }
    }

    componentDidUpdate() {
      this.updateFunction(this.props.todos)
 
    }

    remove = (id) => {
        this.setState((state) => ({
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, deleted: true } : todo
            )
        }))
    }

    toggleDone = (id) => {
        this.setState((state) => ({
            todos: state.todos.map(todo => {
                // console.log('todo', todo);
                return todo.id === id ? { ...todo, done: !todo.done } : todo
            })
        }))
        // console.log('this.state', this.state)
    }

    generateTodos = () => this.state.todos.map(todo => {
        const { id, deleted } = todo;
        if (!deleted) {
            return (
                <Todo
                    key={id}
                    data={todo}
                    remove={this.remove}
                    toggleDone={this.toggleDone}
                />
            )
        }
    })

    updateFunction = (arr) => {
        const { todos } = this.state;
       
        const myTodo = arr[arr.length - 1];


        if (todos.length !== arr.length) {
            this.setState((state) => {      
                return {
                todos: state.todos.concat(myTodo)
            }
        })
    }
}

    render() {
        const todoToDisplay = this.generateTodos();

        return (
            <div className="main">
                <div className="container">
                    {todoToDisplay}
                </div>
            </div>
        );
    }
}

export default Main;