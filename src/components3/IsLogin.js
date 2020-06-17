import React, {Component} from "react"

class IsLogin extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: true
        };
    }
        render(){
            let wordDisplay;
            wordDisplay = this.state.isLoggedIn ? "yes" : "No !";
            return(
            // <h3>Login Status : {this.state.isLoggedIn ? "Yes" : "No"}</h3>
            {wordDisplay}
            );
        }
   
}

export default IsLogin;