import styled from "styled-components";
import colors from "../utils/color";
import PictureHome from "../assets/PictureHome.png"

const DivHome = styled.div`
    width : 100 %;
`

function HomePicture ({presentation}) {
    return (

        <DivHome>
            <img src= {presentation}/>
            <h1>Chez vous, partout et ailleurs</h1>
        </DivHome>

    )
}


HomePicture.defaultProps = {
    presentation: PictureHome,
}



export default HomePicture;