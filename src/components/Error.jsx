import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <h1 className="NotFound">404</h1>
            <h5 className="ErrorPage">Oups! La page que vous demandez n'existe pas.</h5>
            <NavLink className="StyledLinkHomeReturn" to = "/">Retourner sur la page d’accueil</NavLink>
        </>
    )
}

export default Error;