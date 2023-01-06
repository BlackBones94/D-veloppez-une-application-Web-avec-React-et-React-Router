
import PictureHome from "../assets/PictureHome.png"



function HomePicture ({presentation}) {
    return (

        <div className="DivHome">
            <img className="HomeImg" src= {presentation} alt="BannerHome"/>
            <h1 className="HomeH1">Chez vous, partout et ailleurs</h1>
        </div>

    )
}


HomePicture.defaultProps = {
    presentation: PictureHome,
}



export default HomePicture;