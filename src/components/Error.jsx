import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <h1 className="NotFound">404</h1>
            <h5 className="ErrorPage">Oups! La page que vous demandez n'existe pas.</h5>
            <Link className="StyledLinkHomeReturn" to = "/">Retourner sur la page d’accueil</Link>
        </>
    )
}

export default Error;