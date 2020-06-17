import React from "react"


function ContactCard(props){
    console.log(props);
    const styles = {
        fontSize:30
    }
    return(
        <div className = "contact-card">
            <img src = {props.cont.imgSrc} />
            <h3 style = {{color : "red",backgroundColor:"green"}}>{props.cont.name}</h3>
            <p style = {styles}>{props.cont.phone}</p>
            {styles.fontWeight = "bold",styles.fontStyle="italic"}
            <p style = {styles}>{props.cont.email}</p>
        </div>
    );
}


export default ContactCard;




/*


function ContactCard(props){
    console.log(props);
    const styles = {
        fontSize:30
    }
    return(
        <div className = "contact-card">
            <img src = {props.cont.imgSrc} />
            <h3 style = {{color : "red",backgroundColor:"green"}}>{props.cont.name}</h3>
            <p style = {styles}>{props.cont.phone}</p>
            {styles.fontWeight = "bold",styles.fontStyle="italic"}
            <p style = {styles}>{props.cont.email}</p>
        </div>
    );
}


 */