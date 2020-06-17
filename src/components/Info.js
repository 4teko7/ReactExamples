import React from "react"

class Info extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Yes",
            age: 13
        };
    }

    render(){
        return(
            <div>
                {this.state.name}
                <br></br>
                <hr></hr>
                {this.state.age}
            </div>
        );
    }

}


export default Info;