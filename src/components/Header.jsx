import { Link } from "react-router-dom";
import colors from "../utils/color";
import styled from "styled-components";
import LogoHeader from '../assets/HeaderLogo.png'


const StyledGlobalDiv = styled.div`
        display:flex;
        justify-content: space-between
`

const StyledLink = styled(Link)`
    padding-left: 57px;
    font-weight: 500;
    text-decoration : none;
    color: ${colors.redFont};
    font-size: 24px;
`

const DivLogo = styled.div`
        padding-top: 2.2%;
        padding-left: 5%;
`

const StyledNav = styled.nav`
        padding-top: 57px;
        padding-right : 5%;
`

function Header({logo}) {
    return (
        <StyledGlobalDiv>
            <DivLogo>
                <img src = {logo} alt = 'Kasa'  />
            </DivLogo>
            <StyledNav>
                <StyledLink to = "/">Acceuil</StyledLink>
                <StyledLink to = "/propos/">A Propos</StyledLink>
            </StyledNav>
        </StyledGlobalDiv>
    )

}

Header.defaultProps = {
    logo: LogoHeader,
}

export default Header;