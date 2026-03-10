import styled from "styled-components";


const Main = styled.main`
    padding: 1% 2%;                             
    min-height: 100vh;                              
    background-color: #F4F2EE;
    text-align: center;                               
    width: 80%;   
    @media  screen and (max-width: 750px) {
        width: 100%;
    }                                          
`;

const HomeTitle = styled.h2`
    text-align: center; 
    margin: 2% 0;
    font-size: calc(30px + 2vw);
    color: black;
`;

const CompanyContainer = styled.div`
    padding-bottom: 1%;                                     
`;

const CompanyHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: calc(12px + 1.3vw);                                  
`;

const CompanyTitle = styled.h3`
    font-size: calc(16px + 1vw);
    font-weight: 700;                                         
`;

const CompanyLogo = styled.img`
    width: 50px;       
    height: 50px;      
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;                              
`;

const RoleContainer = styled.div`
    margin: 2% 0;                                
`;

const RoleHeader = styled.div`
    text-align: left;                              
`;

const RoleTitle = styled.h4`
    font-size: calc(10px + 1vw);
    font-weight: 200;                         
`;

const RoleDate = styled.span`
    font-size: calc(8px + 0.5vw);
    font-weight: 200;
    padding: 0;
    color: #616161;                        
`;

const RoleUl = styled.ul`
    padding: 1%;                      
`;

const RoleLi = styled.li`
    text-align: left;
    list-style-type: circle;
    font-size: calc(4px + 0.75vw);               
`;


export default function Education(){
    return (
        <Main>
            <title>Education | Resume</title>
            <HomeTitle>Education</HomeTitle>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../download (1).png" alt="Boston University Logo"></CompanyLogo>
                    <CompanyTitle>Boston University</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Master of Science in Software Development</RoleTitle>
                        <RoleDate>Graduating on May 17<sup>th</sup>, 2026</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>MET CS 521 - Information Structures with Python</RoleLi>
                        <RoleLi>MET CS 526 - Data Structures and Algorithms</RoleLi>
                        <RoleLi>MET CS 622 - Advanced Programming Techniques</RoleLi>
                        <RoleLi>MET CS 665 - Software Design and Patterns</RoleLi>
                        <RoleLi>MET CS 673 - Software Engineering</RoleLi>
                        <RoleLi>MET CS 577 - Data Science with Python</RoleLi>
                        <RoleLi>MET CS 601 - Web Application Development</RoleLi>
                        <RoleLi>MET CS 767 - Advanced Machine Learning and Neural Networks</RoleLi>
                    </RoleUl>
                </RoleContainer>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../Bryant_University_seal.png" alt="Bryant University Logo"></CompanyLogo>
                    <CompanyTitle>Bryant University</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Bachelor of Science in Data Science | Business Administration Minor</RoleTitle>
                        <RoleDate>Graduated on May 22<sup>nd</sup>, 2021</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>ISA 421 - Advanced Application Development</RoleLi>
                        <RoleLi>MATH 460 - Applied Data Mining</RoleLi>
                        <RoleLi>ISA 460 - Big Data Analytics</RoleLi>
                        <RoleLi>SCI 378 - Computer Programming for the Sciences</RoleLi>
                        <RoleLi>ISA 490 - Data Science Capstone</RoleLi>
                        <RoleLi>ISA 310 - Data Visualization</RoleLi>
                        <RoleLi>ISA 360 - Data Warehousing in the Age of Big Data</RoleLi>
                        <RoleLi>ISA 341 - Database Management Systems Principles</RoleLi>
                        <RoleLi>MATH 421 - Statistical Analysis With R</RoleLi>
                        <RoleLi>ISA 345 - Web Design and Development</RoleLi>
                        <RoleLi>ISA 330 - Programming for Data Science</RoleLi>
                        <RoleLi>ISA 221 - Introduction to Programming</RoleLi>
                        <RoleLi>ISA 343 - Infrastructure and Cloud Computing</RoleLi>
                        <RoleLi>AA 205 - Intro to Applied Analytics</RoleLi>
                    </RoleUl>
                </RoleContainer>
            </CompanyContainer>
        </Main>
    );
} 