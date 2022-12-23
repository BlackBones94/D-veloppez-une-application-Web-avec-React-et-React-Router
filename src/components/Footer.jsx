import LogoFoot from '../assets/FooterLogo.png'


function Footer({logo}){
    return (
        <div className='FootDiv'>
            <img className= 'LogoSize' src = {logo} alt = "kasa" />
            <h5 className='FontH5'>© 2020 Kasa. All rights reserved</h5>
        </div>
    )

}


Footer.defaultProps = {
    logo: LogoFoot,
}

export default Footer;