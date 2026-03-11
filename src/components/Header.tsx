import styled from "styled-components";


const HeaderStyle = styled.header`
    padding: 1%;
    background-color: #0A66C2;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media  screen and (max-width: 1000px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 1%;
`;

const ProfilePicture = styled.img`
    width: 75px;       
    height: 75px;      
    border-radius: 50%; 
    object-fit: cover;
    margin: 5px;
    @media  screen and (max-width: 1000px) {
        width: 150px;       
        height: 150px;      
        border-radius: 50%; 
        object-fit: cover;
        margin: 5px;
    }
`;


export default function Header() {
    return (
        <HeaderStyle>
            <ProfilePicture src = "../../IMG_3390.png" alt="Luke Therieau"></ProfilePicture>
            <HeaderTitle>
                <h1>Luke Therieau</h1>
                <p>Resume</p>
            </HeaderTitle>
        </HeaderStyle>
    );
}