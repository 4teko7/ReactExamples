import React from "react"

function Todo(props){

    return(

        <div>
            <h3>
                <input checked={props.todo.completed && true} onChange={() => props.handleChange(props.todo.id)} type="checkbox" />
                {props.todo.todo}
            </h3>
        </div>

    );

}


export default Todo;