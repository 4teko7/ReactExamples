import React from "react"


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            isChecked: false,
            gender: "",
            favTeam:""
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.mauseOverHandler = this.mauseOverHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputChangeHandler(event){
        const {name,value,checked,type} = event.target
        
        type==="checkbox" ? this.setState({
            [name] : checked
        }) : this.setState({
            // [event.target.name]: event.target.value
            [name]: value
        });
    }

    mauseOverHandler(){
        console.log("MOUSE OVER")    
    }

    handleSubmit(){
        console.log("Submit");    
        console.log();
    }


    render(){
        var styles = {textAlign:"center",margin:"1rem"}
        return(
            <div style={styles}>
                <form onSubmit={this.handleSubmit}>
                    <p>Username: {this.state.username}</p>
                    <input name = "username" onChange={this.inputChangeHandler} placeholder="Username" type="text" />
                    <p>FirstName: {this.state.firstName}</p>
                    <input name = "firstName" onChange={this.inputChangeHandler} onMouseEnter={this.mauseOverHandler} onMouseLeave={this.mauseOverHandler} placeholder="FirstName" type="text" />
                    <p>LastName: {this.state.lastName}</p>
                    <input name = "lastName" onChange={this.inputChangeHandler} onMouseEnter={this.mauseOverHandler} onMouseLeave={this.mauseOverHandler} placeholder="Lastname" type="text" />
                    <br />
                    Is Friend:  <input name= "isChecked" type = "checkbox" checked={this.state.isChecked} onChange={this.inputChangeHandler} />
                    <br / >
                    <p style = {{display: !this.state.isChecked && "none"}}>He/She is your friend then...</p>
                    <p style={{display: !this.state.gender && "none"}}>Your Gender is : {this.state.gender}</p>
                    Male: <input name= "gender" value = "male" type = "radio" checked={this.state.gender === "male"} onChange={this.inputChangeHandler} />
                    <br/>
                    Female: <input name= "gender" value = "female" type = "radio" checked={this.state.gender === "female"} onChange={this.inputChangeHandler} />
                    <br/>
                    <p style={{display: !this.state.favTeam && "none"}}>Your Favorite Team : {this.state.favTeam}</p>
                    <select onChange={this.inputChangeHandler} name="favTeam" value = {this.state.favTeam}>
                        <option>Select Team</option>
                        <option>FB</option>
                        <option value="gs">GS</option>
                        <option value="bjk">BJK</option>
                        <option value="ts">TS</option>
                    </select>
                    <br /> <br />
                    <button>Submit</button>
                </form>
            </div>

        );
    }


}

export default App;