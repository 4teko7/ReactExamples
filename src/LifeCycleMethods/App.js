import React, { Component } from "react"


class App extends Component {

    constructor(){
        super();
        this.state = {

        }
    }


    static getDerivedStateFromProps(props,state){
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate(){
        // create a backup of the current way things are.
        // snapshot of current app.
    }

    // *************** Depricated ******************
    // componentWillMount(){} 

    componentDidMount(){
        //After Displaying the content in the browser, this method will be called.
        // In this method, you can make some api calls
    }


    // *************** Depricated ******************
    //This method is deprecated you can use it like UNSAFE_component...
    // componentWillReceiveProps(nextProps){     
    //     if(nextProps.whatever !== this.props.whatever){
    //         // do something
    //     }
    // }


    // *************** Depricated ******************
    // componentWillUpdate(){}

    shouldComponentUpdate(nextProps, nextState){
        // return true if want it to update = re render()
        // return false it not.
    }


    componentWillUnmount(){
        // teardown or cleanup your code before your component disappears
        // Component will disappear from the screen.
        // Remove event listener etc.
    }

    render(){
        return(
            "asd"
        );
    }




}

export default App;