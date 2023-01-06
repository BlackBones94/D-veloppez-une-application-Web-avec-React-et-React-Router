import TitleHouse from "../components/TitleHouse";
import AuthorName from "../components/AuthorName";
import Tag from "../components/Tag";
import Caroussel from "../components/Caroussel";
import Rating from "../components/Rating";
import React, {useEffect , useState } from "react";
import {useParams , useNavigate} from "react-router-dom"; 
import Dropdown from "../components/Dropdown";

function House () {
    const [data, setData] = useState([{}]);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {id} = useParams();
    console.log("param de la page" ,id)


    useEffect(() => {
        fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const filtered = data.find((element) => element.id === id ); 
            if(!filtered) {
                navigate('/error')
            }
            setData(filtered);
        })
        .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [id , navigate])

    if(loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <div>
            <Caroussel 
            pictures = {data.pictures}
            />
            <div className="TitleAndAuthor">
                <TitleHouse 
                title = {data.title}
                location = {data.location}
                />
                <AuthorName 
                host = {data.host}
                />
            </div>

            <div className="TagSection">
                <Tag  
                    tags = {data.tags}
                    />
            </div>

            <div className="RatingSection">
                <Rating 
                rating = {data.rating}
                />
            </div>

            <div className="DropsdownAll">
                <div className="DropdownDescription">
                    <Dropdown name="Description" content = {data.description} />
                </div>

                <div className="DropdownEquipements">
                    <Dropdown name="Equipements" content = {data.equipments} />
                </div>
            </div>
        </div>
    );

}
export default House;
