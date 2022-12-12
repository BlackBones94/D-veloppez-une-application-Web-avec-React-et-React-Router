import styled from "styled-components";
import PicturePropos from "../assets/PicturePropos.png"

const DivPropos = styled.div`
    width : 90%;
    text-align: center;
    padding-top :68px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom : 31px;
`

const ProposImg = styled.img`
    width : 100%;
    height : 232px;
    margin-left: auto;
    margin-right: auto;
    border-radius : 25px;
    filter: brightness(65%);
`
// responsive styled component
//https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172


function ProposPicture ({presentation}) {
    return (

        <DivPropos>
            <ProposImg src= {presentation}/>
        </DivPropos>

    )
}


ProposPicture.defaultProps = {
    presentation: PicturePropos,
}



export default ProposPicture;