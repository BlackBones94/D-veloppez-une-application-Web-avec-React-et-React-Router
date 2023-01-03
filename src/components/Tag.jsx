
import React from "react";

function Tag(props) {
    console.log( "props", props)

    return(
        <div>
            <ul className="ulTag">
                {props.tags && props.tags.map(el => {
                return <li className="liTag" key={el} >{el}</li>
                })}
            </ul>
        
        </div>
    )
}

export default Tag;

