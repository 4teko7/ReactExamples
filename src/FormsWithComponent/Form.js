import React from "react"

function Form(props){
    var styles = {textAlign:"center",margin:"1rem"};
    var style2 = {marginBottom:"2rem"}
    return(

        <div className = "col-md-6 col-lg-6 col-xs-12 col-sm-12" style={style2}>
            <input onChange={props.onChangeHandlerMethod} name="username" placeholder="Username"/><br/>
            <input onChange={props.onChangeHandlerMethod} name="firstName" placeholder="First Name"/><br />
            <input onChange={props.onChangeHandlerMethod} name="lastName" placeholder="Last Name"/><br />
            <input onChange={props.onChangeHandlerMethod} type="number" name="age" placeholder="Age"/><br />
            <input onChange={props.onChangeHandlerMethod} name="school" placeholder="School"/><br />
            <input onChange={props.onChangeHandlerMethod} name="department" placeholder="Department"/><br />
            <div style={styles}>
                Java: <input className="languages" type="checkbox" name="Java" onChange={props.onChangeHandlerMethod} /><br />
                C++: <input className="languages" type="checkbox" name="C++" onChange={props.onChangeHandlerMethod} /><br />
                Python: <input className="languages" type="checkbox" name="Python" onChange={props.onChangeHandlerMethod} /><br />
                JavaScript: <input className="languages" type="checkbox" name="JavaScript" onChange={props.onChangeHandlerMethod} /><br />
            </div>
            <span>Are You Student ? </span><input type="checkbox" name = "isStudent" onChange={props.onChangeHandlerMethod} /><br />
            <div style={styles}>
                Male : <input name="gender" type="radio" value="Male" onChange={props.onChangeHandlerMethod} /><br />
                Female : <input name="gender" type="radio" value="Female" onChange={props.onChangeHandlerMethod} /><br />
            </div>
            <select name="destination" onChange={props.onChangeHandlerMethod}>
                <option>Destination</option>
                <option>Turkey</option>
                <option>Germany</option>
                <option>USA</option>
                <option>China</option>
                <option>Japan</option>
            </select><br /><br />
            <button type="submit">Submit</button>
        </div>
    );
}


export default Form;