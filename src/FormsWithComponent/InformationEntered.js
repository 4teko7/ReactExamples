import React from "react"

function InformationEntered(props){

    return(

        <div className = "col-md-6 col-lg-6 col-xs-12 col-sm-12">
            <h2><b>Entered Information</b></h2><hr />
            <h3>Username : {props.this.state.username}</h3>
            <h3>First Name : {props.this.state.firstName}</h3>
            <h3>Last Name : {props.this.state.lastName}</h3>
            <h3>Age : {props.this.state.age}</h3>
            <h3>School : {props.this.state.school}</h3>
            <h3>Department : {props.this.state.department}</h3>
            <h3>Languages: {props.this.getLanguages()}</h3>
            <h3>Student : {props.this.state.isStudent ? "Yes" : "No"}</h3>
            <h3>Gender : {props.this.state.gender}</h3>
            <h3>Destination : {props.this.state.destination === "Destination" ? "" : props.this.state.destination}</h3>
        </div>

    );
}





export default InformationEntered;