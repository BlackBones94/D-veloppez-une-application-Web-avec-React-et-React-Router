import styled from "styled-components";
import colors from "../utils/color";
import PictureHome from "../assets/PictureHome.png"

const DivHome = styled.div`
    width : 90%;
    text-align: center;
    padding-top :68px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const HomeImg = styled.img`
    width : 100%;
    height : 232px;
    margin-left: auto;
    margin-right: auto;
    border-radius : 25px;
    filter: brightness(65%);
`
// responsive styled component
//https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172

const HomeH1 = styled.h1`
    position : relative;
    bottom : 150px;
    color : ${colors.whiteFont};
    font-weight : 500;
    font-size : 48px;
    line-height :  68.45px;
    padding : 0;
    margin:0;
    
`

function HomePicture ({presentation}) {
    return (

        <DivHome>
            <HomeImg src= {presentation}/>
            <HomeH1>Chez vous, partout et ailleurs</HomeH1>
        </DivHome>

    )
}


HomePicture.defaultProps = {
    presentation: PictureHome,
}



export default HomePicture;