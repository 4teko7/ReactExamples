import React from "react"

function Joke(props){
    const array1 = [1,2,3,4,5,6];
    const arrayDoubled = array1.map((num) => num**2);
    console.log(arrayDoubled);
    return(
        <div>
            <h3 style={{color:!props.question && "red"}}>Number : {props.id}</h3>
            <h3 style={{display: props.question ? "block" : "none",color:!props.question && "red"}}>Question : {props.question} </h3>
            <h3 style = {{display: !props.answer && "none",color:!props.question && "red"}}>Answer : {props.answer}</h3>

        </div>

    );
}

export default Joke;