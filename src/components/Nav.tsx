import {NavLink} from "react-router";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: #E0DADA;
    width: 20%;
    @media  screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 10%;
    @media  screen and (max-width: 1000px) {
        padding: 0;
    }
`;

const StyledLi = styled.ul`
    width: 90%;
    text-align: left;
    background-color: #E0DADA;
    font-weight: 900;
    padding-left: 3%;
    border-radius: 5px;
    @media  screen and (max-width: 1000px) {
        width: 100%;                                   
        text-align: center;
        background-color:#E0DADA;
        font-weight: 900;
        padding: 3%;
        border-radius: 5px;
    }
`;

const StyledLinks = styled(NavLink)`
    width: 90%;
    text-align: left;
    font-weight: 900;
    padding-left: 3%;
    border-radius: 5px;
    text-decoration: none;
    font-size: calc(2px + 1.3vw);
    color: black;
    @media  screen and (max-width: 1000px) {
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
                <StyledLi><StyledLinks to="/home" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Home</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/education" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Education</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/employment" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Employment</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/projects" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Projects</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/awards" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Awards</StyledLinks></StyledLi>
                <StyledLi><StyledLinks to="/skills" className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link-inactive')}>Skills</StyledLinks></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}


