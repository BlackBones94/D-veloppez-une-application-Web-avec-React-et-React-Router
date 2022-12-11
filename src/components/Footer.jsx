import LogoFoot from '../assets/FooterLogo.png'
import styled from 'styled-components'
import colors from '../utils/color';

const FootDiv = styled.div`
    background-color: ${colors.footerColor};
    text-align: center;
    align-items: center;
    display : flex;
    flex-direction : column;
`
const LogoSize = styled.img`
    width : 122px;
    height : 39.44px;
    padding-top : 66px;
`
const FontH5 = styled.h5`
    font-weight : 500; 
    font-size: 24px;
    line-height :  34.22px;
    color : ${colors.whiteFont}
     
`


function Footer({logo}){
    return (
        <FootDiv>
            <LogoSize src = {logo} alt = "kasa" />
            <FontH5>© 2020 Kasa. All rights reserved</FontH5>
        </FootDiv>
    )

}


Footer.defaultProps = {
    logo: LogoFoot,
}

export default Footer;