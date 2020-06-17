import React from "react"


function People(props){
    
    
    console.log(props.people);
    return(
        <div>

            <p>Name: {props.people.name}</p>
            <p>Birthday: {props.people.birth_year}</p>
            <p>Eye Color: {props.people.eye_color}</p>
            <p>Gender: {props.people.gender}</p>
            <p>Height: {props.people.height}</p>
            <p>Mass: {props.people.mass}</p>
            <p>Skin Color: {props.people.skin_color}</p>
            <p>Vehicles: {props.people.vehicles}</p>

        </div>

    );
}

export default People;