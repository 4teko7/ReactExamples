import React, { Component } from "react"
import todoData from "./TodoData"
import Todo from "./Todo"


class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState =>{
            // var filteredTodos = prevState.todos.filter(todo=>{
            //     if(todo.id == id){
            //         return false;
            //     }
            //     return true;
            // });
            
            var filteredTodos = prevState.todos.map(todo=>{
                if(todo.id == id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            
            console.log(filteredTodos);
            return {
                todos: filteredTodos
            }
        });
    }
    render() {
        var todosSent = this.state.todos.map(
            todo => <Todo key={todo.id} todo={todo} handleChange={this.handleChange} />
            );
        var styles = {textAlign:"center",margin:"auto"}
        return(
            <div style = {styles}>
                {todosSent}
            </div>
        );
    }
}



export default App;