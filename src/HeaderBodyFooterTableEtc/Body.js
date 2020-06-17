import React, { Component } from "react"
import ReactDOM from "react-dom"
import Table from "./Table"
import ContactCard from "./ContactCard"

function Body(){
    var contact = {imgSrc:"",
    name:"bilal",
    phone:"05428326020",
    email:"bilal.tekin@boun.edu.tr"}
    return(
        <div className = "container">
            
        <ContactCard 
        cont={contact}
        />
        <ContactCard 
        cont={contact}
        />
    </div>
    
    );
}

export default Body;


/*

function Body(){
    var contact = {imgSrc:"",
    name:"bilal",
    phone:"05428326020",
    email:"bilal.tekin@boun.edu.tr"}
    return(
        <div className = "container">
            
        <ContactCard 
        cont={contact}
        />
        <ContactCard 
        cont={contact}
        />

</div>
    );
}





function ContactCard(props){
    console.log(props);
    return(
        <div className = "contact-card">
            <img src = {props.cont.imgSrc} />
            <h3>{props.cont.name}</h3>
            <p>{props.cont.phone}</p>
            <p>{props.cont.email}</p>
        </div>
    );
}




*/

/********************************************** */

/*

function Body(){
    return(
        <div className = "container">
        <ContactCard 
        imgSrc=""
        name="bilal"
        phone="05428326020"
        email="bilal.tekin@boun.edu.tr"
        />
        <ContactCard 
        imgSrc=""
        name="bilal"
        phone="05428326020"
        email="bilal.tekin@boun.edu.tr"
        />
        <ContactCard 
        imgSrc=""
        name="bilal"
        phone="05428326020"
        email="bilal.tekin@boun.edu.tr"
        />
</div>
    );
}





function ContactCard(props){
    console.log(props);
    return(
        <div className = "contact-card">
            <img src = {props.imgSrc} />
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}

*/


