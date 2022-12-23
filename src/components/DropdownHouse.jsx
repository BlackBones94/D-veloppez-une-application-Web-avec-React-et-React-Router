import React from "react";
import arrow from '../assets/arrow.png'

function DropdownHouse(props) {
    const [open , setOpen] = React.useState(false);
    const [openEquip , setOpenEquipement] = React.useState(false)
    console.log( "DropdownHouse" , props)

    const openDescription = () => {
        setOpen(!open);
        const rotate = document.getElementById('arrowDescription');
    
        {open ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
    
      };
    
      const openEquipements = () =>  {
        setOpenEquipement(!openEquip);
        const rotate = document.getElementById('arrowEquipements');
    
        {openEquip ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
      }
    return(
            <div className="dropBox">
                <div>
                    <button  className="btn-house" onClick={openDescription} >  Description
                        <img className="img-arrow" id ="arrowDescription" src={arrow} alt ="arrow" />
                    </button>
                    {open ? 
                    <div className="hidden"></div> : <div className="openDropHouseDescription">{props.description}</div>}
                </div>
                <div>
                    <button className="btn-house" onClick={openEquipements}> Equipement
                        <img className="img-arrow" id ="arrowEquipements" src={arrow} alt ="arrow" />
                    </button>
                        {openEquip ? 
                        <div className="hidden"></div> : <div className="openDropHouseEquipement">
                            <ul>
                            {props.equipments && props.equipments.map(el => {
                            return <li key={el} >{el}</li>
                                })}
                            </ul>
                        </div>}
                </div>
            
               
            </div>
    )
}


export default DropdownHouse