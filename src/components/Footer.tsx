import styled from "styled-components";


const FooterStyle = styled.footer`
    background-color: #0A66C2;
    color: white;
    padding: 1%;
    text-align: center;
`;

const FooterA = styled.a`
    color: bisque;
`;


export default function Footer() {
    return (
        <FooterStyle>
            <p>All Rights Reserved by Luke Therieau <FooterA href="#"> Credits</FooterA> &#169;</p>
        </FooterStyle>
    );
}