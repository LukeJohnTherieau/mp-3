import styled from "styled-components";


const Main = styled.main`
    padding: 1% 2%;                             
    min-height: 100vh;                              
    background-color: #F4F2EE;
    text-aRoleLign: center;                               
    width: 80%; 
    @media  screen and (max-width: 1000px) {
        width: 100%;
    }                                            
`;

const HomeTitle = styled.h2`
    text-align: center; 
    margin: 2% 0;
    font-size: calc(30px + 2vw);
    color: black;
`;

const SkillTitle = styled.h3`
    text-align: center;                       
`;

const RoleLi = styled.li`
    text-align: left;
    list-style-type: circle;
    font-size: calc(10px + 0.75vw);            
`;

const SkillRow = styled.div`
    display: flex;
    flex-direction: row;   
    @media  screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        margin: 1%;
    }                    
`;

const SkillCategory = styled.div`
    width: 50%;
    outline: 2px solid black;      
    border-radius: 5px;                  
    margin: 1%;
    padding: 1%;    
    @media  screen and (max-width: 1000px) {
        width: 100%;
    }              
`;


export default function Skills(){
    return (
        <Main>
            <title>Education | Skills</title>
            <HomeTitle>Skills</HomeTitle>
            <SkillRow>
                <SkillCategory>
                    <SkillTitle>Data Science</SkillTitle>
                    <ul>
                        <RoleLi>PySpark</RoleLi>
                        <RoleLi>Data Engineering</RoleLi>
                        <RoleLi>Statistical Analysis</RoleLi>
                        <RoleLi>k-means clustering</RoleLi>
                        <RoleLi>Deep Learning</RoleLi>
                        <RoleLi>PyTorch</RoleLi>
                        <RoleLi>Convolutional Neural Networks (CNN)</RoleLi>
                        <RoleLi>Pandas</RoleLi>
                        <RoleLi>NumPy</RoleLi>
                        <RoleLi>Random Forest</RoleLi>
                    </ul>
                </SkillCategory>
                <SkillCategory>
                    <SkillTitle>Web Development</SkillTitle>
                    <ul>
                        <RoleLi>Model-View-Controller (MVC)</RoleLi>
                        <RoleLi>Full-Stack Development</RoleLi>
                        <RoleLi>HTML</RoleLi>
                        <RoleLi>CSS</RoleLi>
                        <RoleLi>JavaScript</RoleLi>
                        <RoleLi>TypeScript</RoleLi>
                        <RoleLi>RESTful WebServices</RoleLi>
                        <RoleLi>API Development</RoleLi>
                        <RoleLi>Hypertext Transfer Protocol (HTTP)</RoleLi>
                        <RoleLi>Secure Authentication</RoleLi>
                        <RoleLi>Microservices</RoleLi>
                        <RoleLi>Django</RoleLi>
                        <RoleLi>Electron.js</RoleLi>
                        <RoleLi>Flask</RoleLi>
                    </ul>
                </SkillCategory>
            </SkillRow>
            <SkillRow>
                <SkillCategory>
                    <SkillTitle>Databases</SkillTitle>
                    <ul>
                        <RoleLi>Microsoft SQL Server</RoleLi>
                        <RoleLi>MySQL</RoleLi>
                        <RoleLi>MongoDB</RoleLi>
                        <RoleLi>T-SQL</RoleLi>
                        <RoleLi>Database Design</RoleLi>
                        <RoleLi>Data Governance</RoleLi>
                        <RoleLi>Big Data Analytics</RoleLi>
                        <RoleLi>Neo4J</RoleLi>
                        <RoleLi>Stored Procedures</RoleLi>
                    </ul>
                </SkillCategory>
                <SkillCategory>
                    <SkillTitle>Software Development</SkillTitle>
                    <ul>
                        <RoleLi>Python</RoleLi>
                        <RoleLi>Java</RoleLi>
                        <RoleLi>C#</RoleLi>
                        <RoleLi>T-SQL</RoleLi>
                        <RoleLi>Software Development Life Cycle (SDLC)</RoleLi>
                        <RoleLi>Agile</RoleLi>
                        <RoleLi>Test Driven Development</RoleLi>
                        <RoleLi>Algorithm Design</RoleLi>
                        <RoleLi>Data Structures</RoleLi>
                        <RoleLi>Object-Oriented Programming (OOP)</RoleLi>
                        <RoleLi>Automation</RoleLi>
                        <RoleLi>RPA</RoleLi>
                    </ul>
                </SkillCategory>
            </SkillRow>
        </Main>
    );
}