import React from "react";

function AuthorName(props) {
    console.log("props AUTHOR" ,props)

    return(
        <div className="hostDiv">
            {props.host ? <p className="hostName">{props.host.name}</p> : true}
            {props.host ? <img className="hostPicture" src= {props.host.picture} alt="miniature"/> :true}
            
        </div>
    )
}

export default AuthorName;