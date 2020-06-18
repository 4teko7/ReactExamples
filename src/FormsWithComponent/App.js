import React from "react"
import ArrayComponent from "./ArrayComponent"
import Form from "./Form"
import InformationEntered from "./InformationEntered"

class App extends React.Component {
    
    constructor(){
        super();
        this.state={
            username:"",
            firstName:"",
            lastName:"",
            age:"",
            isStudent:"",
            gender:"",
            destination:"",
            school:"",
            languages:{
                "java": false,
                "C++": false,
                "Python":false,
                "JavaScript":false
            },
            department:""
        }
        this.date = new Date();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getLanguages = this.getLanguages.bind(this);
    }

    onChangeHandler(event){
        const {name,value,type,checked,className} = event.target

        type === "checkbox" ?
        className === "languages" ? 
        this.setState(prevState =>{
            return {
                languages: {
                    ...prevState.languages,
                    [name]: checked
                }
            }
            
        }) :
        this.setState({
            [name] : checked
        }) :
        this.setState({
            [name]: value
        });

    }

    getLanguages(){
        var filteredLangs = []
        var keys = Object.keys(this.state.languages);
        var values = Object.values(this.state.languages);
        var len = keys.length;
        var count = 0;
        for(var i = 0; i < len; i++){
            if(values[i])
                filteredLangs[count++] = keys[i]
        }
        return <ArrayComponent key = {this.date.getTime()} arr={filteredLangs}/>;
    }

    render(){
        var styles = {textAlign:"center",margin:"1rem"};
        return(
            
            <div className="row" style={styles} >
                <Form onChangeHandlerMethod={this.onChangeHandler} />
                <InformationEntered this={this}/>
            </div>


           
        );
    }
}

export default App;