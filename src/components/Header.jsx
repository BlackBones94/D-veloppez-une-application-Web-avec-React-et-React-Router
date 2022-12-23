import { Link } from "react-router-dom";
import LogoHeader from '../assets/HeaderLogo.png'



function Header({logo}) {
    return (
        <div className="StyledGlobalDiv">
            <div className="DivLogo">
                <img src = {logo} alt = 'Kasa'  />
            </div>
            <nav className="StyledNav">
                <Link className="StyledLink" to = "/">Acceuil</Link>
                <Link className="StyledLink" to = "/propos/">A Propos</Link>
            </nav>
        </div>
    )

}

Header.defaultProps = {
    logo: LogoHeader,
}

export default Header;