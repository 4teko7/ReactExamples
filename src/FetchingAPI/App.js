import React from "react"
import People from "./People"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            people: []
        };
        this.getPeopleComponentArray = this.getPeopleComponentArray.bind(this);
        this.swapi = "https://swapi.dev/api/people";
        
    }

    componentDidMount(){
        fetch(this.swapi)
        .then(response => response.json())
        .then(data => {
            this.setState({people: data.results});
            
        });
        this.setState({isLoading: false});
    }

    getPeopleComponentArray(){
        var peopleComponentArray = []; 
        var length = this.state.people.length;
        var id = 0;
        for(var i = 0; i < length; i++){
            peopleComponentArray.push(<People key={id++} people={this.state.people[i]} />);
            peopleComponentArray.push(<hr />);
            
        }
        return peopleComponentArray;
    }

    render(){
        
         if(!this.state.isLoading){
             var peopleComponents = this.getPeopleComponentArray();
             return(
                 <div>
                     {peopleComponents}
                 </div>
             );
         }else{
            return(
            
                <div>
                    The Data Is Currently Loading...                    
                </div>
    
            );
         }
        
    }


}


export default App;