import React from "react"

function Todo(props){
    var todoStyle = props.todo.completed ? {fontStyle: "italic",textDecoration:"line-through",color:"#cdcdcd"} : {}
    return(

        <div>
            <h3 style={todoStyle}>
                <input checked={props.todo.completed && true} onChange={() => props.handleChange(props.todo.id)} type="checkbox" />
                {props.todo.todo}
            </h3>
        </div>

    );

}


export default Todo;