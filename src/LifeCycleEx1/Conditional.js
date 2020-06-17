import React from "react"

function Conditional(props){
    var stylesOfIsLoading = {
        display: !props.isLoading && "none"
    }
    var styleOfLoaded = {
        display: props.isLoading && "none",
        color: "green"
    }
    var divStyle = {
        color:"red",
        textAlign:"center",
        margin:"auto"
    }
    // var symbol = document.createElement("h3");
   
    var symbol = "*******************************";
    var h3Style = {color: props.isLoading ? "red" : "green"}
    var h3 = <h3 style = {h3Style}>{symbol}</h3>
    return(
       <div style = {divStyle}>
            {h3}
            <div style={stylesOfIsLoading}> It Is Loading</div>
            <div style = {styleOfLoaded}>Loaded !</div> 
            {h3}

       </div>

    );
}

export default Conditional;