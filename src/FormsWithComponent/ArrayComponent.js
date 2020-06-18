import React from "react"

function ArrarComponent(props){
    var LangJSX = props.arr.map(lang =>{
    return <li>{lang}</li>

    });

    console.log()
    return(

        <div>
            {LangJSX}
        </div>
    );
}


export default ArrarComponent;