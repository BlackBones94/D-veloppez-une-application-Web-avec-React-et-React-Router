import { Link } from "react-router-dom";
import colors from "../utils/color";
import styled from "styled-components";

const NotFound = styled.h1`
    font-weight : 700;
    font-size : 288px;
    text-align : center;
    line-height : 41.69px;
    color : ${colors.redFont};
    padding-top: 167px;
`

const ErrorPage = styled.h5`
    font-weight : 500;
    font-size : 36px;
    text-align : center;
    line-height : 51.34px;
    color : ${colors.redFont};
`
const StyledLinkHomeReturn = styled(Link)`
    font-weight : 500;
    font-size : 18px;
    display : block;
    text-align : center;
    line-height : 25.67px;
    color : ${colors.redFont};
    padding-bottom : 159px
`

function Error() {
    return (
        <div>
            <NotFound>404</NotFound>
            <ErrorPage>Oups! La page que vous demandez n'existe pas.</ErrorPage>
            <StyledLinkHomeReturn to = "/">Retourner sur la page d’accueil</StyledLinkHomeReturn>
        </div>
    )
}

export default Error;