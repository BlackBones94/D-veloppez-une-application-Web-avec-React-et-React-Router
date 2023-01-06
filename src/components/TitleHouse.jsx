
import React  from "react";

function TitleHouse(props) {
    console.log(props)

    return (
 
        <div>
                <div>
                    <h3 className="titleHouse">{props.title}</h3>
                    <h5 className="cityHouse">{props.location}</h5>
                </div>
        </div> 
    );
}

export default TitleHouse;

