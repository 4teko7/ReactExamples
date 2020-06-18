import React from "react"
import ArrayComponent from "./ArrayComponent"

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
        var style2 = {marginBottom:"2rem"}
        return(
            <div className="row" style={styles} >
                <div className = "col-md-6 col-lg-6 col-xs-12 col-sm-12" style={style2}>
                    <input onChange={this.onChangeHandler} name="username" placeholder="Username"/><br/>
                    <input onChange={this.onChangeHandler} name="firstName" placeholder="First Name"/><br />
                    <input onChange={this.onChangeHandler} name="lastName" placeholder="Last Name"/><br />
                    <input onChange={this.onChangeHandler} type="number" name="age" placeholder="Age"/><br />
                    <input onChange={this.onChangeHandler} name="school" placeholder="School"/><br />
                    <input onChange={this.onChangeHandler} name="department" placeholder="Department"/><br />
                    <div style={styles}>
                        Java: <input className="languages" type="checkbox" name="Java" onChange={this.onChangeHandler} /><br />
                        C++: <input className="languages" type="checkbox" name="C++" onChange={this.onChangeHandler} /><br />
                        Python: <input className="languages" type="checkbox" name="Python" onChange={this.onChangeHandler} /><br />
                        JavaScript: <input className="languages" type="checkbox" name="JavaScript" onChange={this.onChangeHandler} /><br />
                    </div>
                    <span>Are You Student ? </span><input type="checkbox" name = "isStudent" onChange={this.onChangeHandler} /><br />
                    <div style={styles}>
                        Male : <input name="gender" type="radio" value="Male" onChange={this.onChangeHandler} /><br />
                        Female : <input name="gender" type="radio" value="Female" onChange={this.onChangeHandler} /><br />
                    </div>
                    <select name="destination" onChange={this.onChangeHandler}>
                        <option>Destination</option>
                        <option>Turkey</option>
                        <option>Germany</option>
                        <option>USA</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select><br /><br />
                    <button type="submit">Submit</button>
                </div>
              
                <div className = "col-md-6 col-lg-6 col-xs-12 col-sm-12">
                    <h2><b>Entered Information</b></h2><hr />
                    <h3>Username : {this.state.username}</h3>
                    <h3>First Name : {this.state.firstName}</h3>
                    <h3>Last Name : {this.state.lastName}</h3>
                    <h3>Age : {this.state.age}</h3>
                    <h3>School : {this.state.school}</h3>
                    <h3>Department : {this.state.department}</h3>
                    <h3>Languages: {this.getLanguages()}</h3>
                    <h3>Student : {this.state.isStudent ? "Yes" : "No"}</h3>
                    <h3>Gender : {this.state.gender}</h3>
                    <h3>Destination : {this.state.destination === "Destination" ? "" : this.state.destination}</h3>
                </div>
            </div>


           
        );
    }
}

export default App;