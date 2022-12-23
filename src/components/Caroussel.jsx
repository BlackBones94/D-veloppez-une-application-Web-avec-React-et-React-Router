import React, {useState} from "react";
import arrowSlide from '../assets/arrowSlide.png';

function Caroussel (props) {
    const [count , setCount] = useState(0);
    console.log("Caroussel picture" ,props)
    
    function plusCounter() {
            if(count === props.pictures.length - 1 ){
                const next = document.getElementById('arrowNext');
                next.style.display  = "none";
                
            } else {
                const next = document.getElementById('arrowNext');
                const previous = document.getElementById('arrowPrevious');
                previous.style.display = "block";
                next.style.display ="block" ; 
                setCount(count + 1);
            }
    }

    function minusCounter() {
        if(count === 0){

            const previous = document.getElementById('arrowPrevious');
            previous.style.display  ="none";
        }  else {
            const previous = document.getElementById('arrowPrevious');
            const next = document.getElementById('arrowNext');
            next.style.display = "block";
                previous.style.display ="block";
                setCount(count - 1);
        }
    }

    return(            
            <div className="caroussel">
                <p>{count}</p>
                <button onClick={() => minusCounter(setCount(0))} className="arrowPrevious" id= "arrowPrevious">
                    <img src={arrowSlide} alt="arrow" />
                </button>
                <div className="SlideConteneur" >
                    {props.pictures ? <img src={props.pictures[count]}/> : true}
                </div>
                <button onClick={() => plusCounter(setCount(count))} className="arrowNext" id= "arrowNext">
                    <img src={arrowSlide} alt="arrow" />
                </button>
            </div>)
}

export default Caroussel;


