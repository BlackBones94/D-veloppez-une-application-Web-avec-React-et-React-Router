import TitleHouse from "../components/TitleHouse";
import AuthorName from "../components/AuthorName";
import Tag from "../components/Tag";
import DropdownHouse from "../components/DropdownHouse";
import Caroussel from "../components/Caroussel";
import Rating from "../components/Rating";
import React, {useEffect , useState } from "react";
import {useParams , useNavigate} from "react-router-dom"; 

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
            <TitleHouse 
            title = {data.title}
            location = {data.location}
            />
            <AuthorName 
            host = {data.host}
            />
            
            <Tag  
            tags = {data.tags}
            />

            <Rating 
            rating =  {data.rating}
            />

            <DropdownHouse
                description = {data.description}
                equipments = {data.equipments}
            />
        </div>
    );

}
export default House;
