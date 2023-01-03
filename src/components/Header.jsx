import { NavLink } from "react-router-dom";
import LogoHeader from '../assets/HeaderLogo.png'



function Header({logo}) {

    return (
        <div className="StyledGlobalDiv">
            <div className="DivLogo">
                <img src = {logo} alt = 'Kasa'  />
            </div>
            <nav className="StyledNav">
                <NavLink className="StyledLink" activeclassname ="active" to = "/">Accueil</NavLink>
                <NavLink className="StyledLink" activeclassname ="active" to = "/propos/">A Propos</NavLink>
            </nav>
        </div>
    )

}

Header.defaultProps = {
    logo: LogoHeader,
}

export default Header;