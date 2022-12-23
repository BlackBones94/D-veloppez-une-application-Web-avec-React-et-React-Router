
import PictureHome from "../assets/PictureHome.png"

// responsive styled component
//https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172

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