import PicturePropos from "../assets/PicturePropos.png"

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