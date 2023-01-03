import React, {useState , useEffect} from "react";
import { NavLink } from "react-router-dom";

function CardList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('../data.json');
            result.json().then(json => {
                setData(json)
                console.log(json)
            })
        }
        fetchData();
    }, [])
    

    return (


        <div className="card">
            {data.map((item)  => (
                    <NavLink className="cardDiv" key ={item.id} to = {item.id}>
                        <h5 className="cardTitle"> {item.title}</h5>
                        <img className="cardImg" src= {item.cover} alt= 'coverCard' />
                    </NavLink>
                ))}
        </div>
    )
}

export default CardList;