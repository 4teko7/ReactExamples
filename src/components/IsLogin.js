import React, {Component} from "react"

class IsLogin extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: true
        };
    }
        render(){
            return(
            <h3>Login Status : {this.state.isLoggedIn ? "Yes" : "No"}</h3>
            );
        }
   
}

export default IsLogin;