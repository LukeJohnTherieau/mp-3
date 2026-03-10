import styled from "styled-components";
import Calculator from '../Calculator.tsx'


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

const ProjectsContent = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const RoleParagraph = styled.p`
    font-size: calc(4px + 0.75vw);                              
    padding: 2%;                                      
    text-align: left;  
    font-weight: 200;
`;


export default function Projects(){
    return (
        <Main>
            <HomeTitle>Projects</HomeTitle>
            <ProjectsContent>
                <CompanyContainer>
                    <CompanyHeader>
                        <CompanyLogo src="../../download (1).png" alt="Boston University Logo"></CompanyLogo>
                        <CompanyTitle>Boston University</CompanyTitle>
                    </CompanyHeader>
                    <hr></hr>
                    <RoleContainer>
                        <RoleHeader>
                            <RoleTitle><a href = "https://github.com/madhurdeepjain/PrivacyRadar">Software Engineering | Privacy Radar</a></RoleTitle>
                            <RoleDate>Sep 2025 - Dec 2025</RoleDate>
                        </RoleHeader>
                        <RoleParagraph>
                            PrivacyRadar is an intelligent, privacy-focused network monitoring platform designed to
                            provide transparency and control over digital privacy in an increasingly connected world. Its
                            core mission is to provide real-time network traffic monitoring and analysis at an application
                            level, enabling users to track exactly which applications are communicating, what data they're
                            transmitting, and where it's being sent. The platform empowers users by transforming complex
                            network analysis into actionable privacy intelligence through intuitive dashboards and
                            plain-language reporting, making advanced privacy protection accessible regardless of
                            technical expertise. Its core mission is to Provide real-time network traffic monitoring and analysis at an application level,
                            Empower users by transforming complex network analysis into actionable privacy intelligence and Identify privacy violations, 
                            unauthorized data collection, and suspicious application behavior: 
                        </RoleParagraph>
                    </RoleContainer>
                    <hr></hr>
                    <RoleContainer>
                        <RoleHeader>
                            <RoleTitle>Information Structures with Python | Term Project</RoleTitle>
                            <RoleDate>Nov 2024 - Dec 2024</RoleDate>
                        </RoleHeader>
                        <RoleParagraph>I created a console turn based strategy game, using Python. The goal of this game is for a 4
                            player to gather resources and funds. It's implementation is almost fully object oriented. 
                            Work done for this project could potentially serve as a foundation for a sequel that incorporates 
                            a GUI interface and AI enemies.
                        </RoleParagraph>
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
                            <RoleTitle>Advanced Application Development | Account Balance Final Project</RoleTitle>
                            <RoleDate>Apr 2021 - May 2021</RoleDate>
                        </RoleHeader>
                        <RoleParagraph>Created an application that focuses on the server side of a typical Web Application using 
                            Java technology. The front-end application consisted of two basic pages which worked in 
                            tandem with one another to complete the application.
                        </RoleParagraph>
                    </RoleContainer>
                    <hr></hr>
                    <RoleContainer>
                        <RoleHeader>
                            <RoleTitle>Big Data Analytics | AAA Cross-Selling Opportunities</RoleTitle>
                            <RoleDate>Apr 2021 - May 2021</RoleDate>
                        </RoleHeader>
                        <RoleUl>
                            <RoleLi>Conducted an exploratory data analysis on several million records provided by AAA Northeast</RoleLi>
                            <RoleLi>erformed the significant steps of a machine learning pipeline, from ETL and feature engineering, to model creation and evaluation</RoleLi>
                            <RoleLi>Utilized PySpark on the cloud-based platform Databricks</RoleLi>
                            <RoleLi>Tested various machine learning models, to identify the distinct characteristics of the client's customer base</RoleLi>
                            <RoleLi>Presented our findings directly to the client, clearly and concisely, to benefit the cross-selling of their product offering</RoleLi>
                        </RoleUl>
                    </RoleContainer>
                </CompanyContainer>
                <hr></hr>
                <RoleTitle>The Calculator</RoleTitle>
                <Calculator />
            </ProjectsContent>
        </Main>
    );
} 