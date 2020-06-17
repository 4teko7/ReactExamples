import React from "react"

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            answer: "Yes"
        };
    }

    render(){
        return(
            <div>
                {this.state.answer}
            </div>
        );
    }

}


export default App;