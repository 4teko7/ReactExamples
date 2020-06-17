import React, { Component } from "react"


class App extends Component {

    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        //After Displaying the content in the browser, this method will be called.
        // In this method, you can make some api calls
    }

    componentWillReceiveProps(nextProps){    //This method is deprecated you can use it like UNSAFE_component...
        if(nextProps.whatever !== this.props.whatever){
            // do something
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true if want it to update = re render()
        // return false it not.
    }


    componentWillUnmount(){
        // Component will disapper from the screen.

    }

    render(){
        return(
            "asd"
        );
    }




}

export default App;