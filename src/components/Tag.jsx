
import React from "react";

function Tag(props) {
    console.log( "props", props)
    // const tags = props.tags
    // console.log( "consolelog du tags" ,tags)
    return(
        <div>
            <ul>
                {props.tags && props.tags.map(el => {
                return <li key={el} >{el}</li>
                })}
            </ul>
        
        </div>
    )
}

export default Tag;

