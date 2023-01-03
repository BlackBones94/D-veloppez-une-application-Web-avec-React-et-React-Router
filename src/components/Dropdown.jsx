
import React, {useState} from "react";

function Dropdown(props) {

    let name = props.name;
    let content = props.content;
    const [open , setOpen] = useState(true)

    const toggleDropdown = () => {
        open ? setOpen(false) : setOpen(true)

    }

    return(
        <>
            <button onClick={toggleDropdown} className={open ? "active" : "accordion"}>{name}</button>
            <div className={open ? "active_panel" : "panel"}>
                {typeof content === "object" ? 
                    <div  className="multiple-content">
                        {content.map((contentItem, index) => {
                            return (
                                <div  className="content-item" key={`contentItem-${index}`}>
                                    <span>{contentItem}</span>
                                </div>
                            )
                        })}
                    </div>
                :
                    <p className="content">{content}</p>
                }
            </div>
        </>
    );
}
export default Dropdown;