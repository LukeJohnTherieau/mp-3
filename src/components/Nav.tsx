import {Link} from "react-router";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: #E0DADA;
    width: 20%;
    @media  screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10%;
    @media  screen and (max-width: 1000px) {
        padding: 3%;
        flex-direction: row;
    }
    @media  screen and (max-width: 750px) {
        padding: 3%;
        flex-direction: column;
    }
`;

const StyledLi = styled.li`
    width: 90%;
    text-align: left;
    background-color: #E0DADA;
    font-weight: 900;
    padding-left: 3%;
    border-radius: 5px;
    @media  screen and (max-width: 1000px) {
        width: 100%;                                   
        text-align: center;
        padding: 1%;
    }
    @media  screen and (max-width: 750px) {
        flex-direction: row;
        width: 100%;                                   
        text-align: center;
        background-color:#E0DADA;
        font-weight: 900;
        padding: 3%;
        border-radius: 5px;
    }
`;

const StyledLinks = styled(Link)`
    width: 90%;
    text-align: left;
    font-weight: 900;
    padding-left: 3%;
    border-radius: 5px;
    text-decoration: none;
    font-size: calc(2px + 1.3vw);
    color: black;
    @media screen and (max-width: 1000px) {
        font-size: calc(12px + 1.3vw);     
        width: 100%;                             
        display: inline-block;
        text-align: center;
    }
`;


export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLinks to="/home">Home</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/education">Education</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/employment">Employment</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/projects">Projects</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/awards">Awards</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/skills">Skills</StyledLinks></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}


