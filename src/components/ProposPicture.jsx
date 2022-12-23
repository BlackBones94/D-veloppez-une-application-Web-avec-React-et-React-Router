import PicturePropos from "../assets/PicturePropos.png"


// responsive styled component
//https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172


function ProposPicture ({presentation}) {
    return (

        <div className="DivPropos">
            <img className="ProposImg" src= {presentation} alt="BannerPropos"/>
        </div>

    )
}


ProposPicture.defaultProps = {
    presentation: PicturePropos,
}



export default ProposPicture;