import React from "react";
import Empty from "../assets/starEmpty.png";
import Full from "../assets/starRed.png";

function Rating (props) {
    const totalStars = 5;
    const activeStars = props.rating;

    console.log(activeStars)
    
    return (
        <div >
            {[...new Array(totalStars)].map((arr, index) => {
            return index < activeStars ? <img src={Full} alt="pleine" /> : <img src={Empty} alt="vide" />;
            })}
        </div>
     );
}


export default Rating;