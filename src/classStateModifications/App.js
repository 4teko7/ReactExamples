import React, {Component} from "react"

class App extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // this.setState({count:this.state.count + 1});

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });


    }
    render(){
        var styles = {display:"grid",justifyContent:"center"};
        var className = "container";
        return(
            <div className = {className} style = {styles}>
                <span id = "count" >{this.state.count}</span>
                <br />
                <button onClick={this.handleClick} > Press </button>
            </div>

        );
    }

}

export default App;