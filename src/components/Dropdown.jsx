import React ,  { useState } from "react"
import arrow from '../assets/arrow.png'


function Dropdown(props) {
    const [open , setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        const rotate = document.getElementById(`${props.id}`)

        {open ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
    }

    return(
            <div className={props.className}>
            <button className="btn-arrow" onClick={handleOpen}>{props.name}<img className="img-arrow" id ={props.id} src={arrow} alt ="arrow" /></button>
            {open ? <div className="hidden"></div> : <div className="openDrop">{props.description}</div>}
            </div>
    )
}

function DropText () {
    return (
        <div >
            <Dropdown name="Fiabilite" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                "  id="rotate0"/>
            <Dropdown name="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                " id="rotate1"/>
            <Dropdown name="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                " id="rotate2"/>
            <Dropdown className="dropLast" name="Securite"  description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                " id="rotate3"/>
        </div>
    )
}

export default DropText;