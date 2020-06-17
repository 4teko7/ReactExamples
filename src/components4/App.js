import React from "react"


function getImg(){return document.getElementById("img");}

function changeImg(){
    var img = getImg();
    img.src = "https://via.placeholder.com/300";
}

function mauseOver(){
    var img = getImg();
    img.src = "https://via.placeholder.com/400";
}

function mauseLeave(){
    var img = getImg();
    img.src = "https://via.placeholder.com/150"
}

function checkBoxChange(){
    var checkSpan = document.getElementById("checkSpan");
    var checkBox = document.getElementById("checkBox");
    checkSpan.innerHTML = checkBox.checked ? "You Checked !!!" : "Click On Check !";
}

function App(){

    return (
        <div>
            <img onMouseOver={mauseOver} onMouseLeave={mauseLeave} id = "img" src = "https://via.placeholder.com/150"/>
            <br />
            <br />
            <input id = "checkBox" onChange={checkBoxChange} type = "checkbox" /><span id="checkSpan" >Click On Check !</span>
            <br />
            <br />
            <button onClick={changeImg}>Change Image</button>
        </div>


    );
}

export default App;