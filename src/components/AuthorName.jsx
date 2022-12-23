import React from "react";

function AuthorName(props) {
    console.log("props AUTHOR" ,props)

    return(
        <div>
            {props.host ? <p>{props.host.name}</p> : true}
            {props.host ? <img src= {props.host.picture}/> :true}
            
        </div>
    )
}

export default AuthorName;