import React from "react";
import Empty from "../assets/starEmpty.png";
import Full from "../assets/starRed.png";

function Rating (props) {
    const totalStars = 5;
    const activeStars = props.rating;

    console.log(activeStars)
    
    return (
        <div className="ratingDiv" >
            {[...new Array(totalStars)].map((arr ,index) => {
            return index <activeStars ? <img key= {index} src={Full} alt="pleine" /> : <img key={index} src={Empty} alt="vide" />;
            })}
        </div>

     );
}


export default Rating;