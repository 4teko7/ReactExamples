import React from "react"
import Joke from "./Joke"
import jokeData from "./JokeData"

function App(){
    console.log(jokeData)
    const jokes = jokeData.map(joke => <Joke id = {joke.id} question = {joke.question} answer = {joke.answer} />);


    return(
        
       <div>
           {jokes}
       </div>
    );
}


export default App;


/*

<div>
           {jokes2.num = "1"}
            <Joke joke={jokes2} />
            {jokes2.num = "2"}
            <Joke joke={jokes} />
            {jokes2.num = "3"}
            <Joke joke={jokes2} />
            {jokes2.num = "4"}
            <Joke joke={jokes} />
       </div>

*/