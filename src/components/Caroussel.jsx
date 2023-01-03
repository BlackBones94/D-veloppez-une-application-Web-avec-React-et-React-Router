import React, {useState} from "react";
import arrowSlide from '../assets/arrowSlide.png';

function Caroussel (props) {
    const [count , setCount] = useState(0);
    console.log("Caroussel picture" ,props)
    const [shownSlide, setShownSlide] = useState(1);

    // let pictures = pictures.length;
    let newIndex ;

    console.log(props.pictures?.length)
    
    function plusCounter() {
        const isLastSlide = count === props.pictures.length - 1;
        newIndex = isLastSlide ? 0 : count +1;
        setCount(newIndex);
        setShownSlide(newIndex +1 )
    }

    function minusCounter() {
        const isFirstSlide = count === 0;
        newIndex = isFirstSlide ?  props.pictures.length - 1 : count - 1;
        setCount(newIndex);
        setShownSlide(newIndex + 1)        
    }

    return(            
            <div className="caroussel" >
                <button onClick={minusCounter} className="arrowPrevious" id= "arrowPrevious">{props.pictures?.length > 1 ? (
                    <img className="leftArrow" src={arrowSlide} alt="arrow" />
                    ) : null}
                </button>
                <div className="SlideConteneur" >
                    {props.pictures ? <img className="imgCaroussel" alt="caroussel" src={props.pictures[count]}/> : true}
                </div>
                <button onClick={plusCounter} className="arrowNext" id= "arrowNext">   {props.pictures?.length > 1 ? (
                    <img src={arrowSlide} alt="arrow" />
                    ) : null}  
                </button>
                <span className="counter">{shownSlide  + "/" + props.pictures?.length}</span>
            </div>)
            
            
}

export default Caroussel;


