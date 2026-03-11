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

const RoleParagraph = styled.p`
    font-size: calc(4px + 0.75vw);                              
    padding: 2%;                                      
    text-align: left;  
    font-weight: 200;
`;


export default function Awards(){
    return (
        <Main>
            <HomeTitle>Awards</HomeTitle>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../images.jpg" alt="Rhode Island Hosuing Logo"></CompanyLogo>
                    <CompanyTitle>Rhode Island Housing</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Early Bird Award</RoleTitle>
                        <RoleDate>July 2025</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>Always early for work or meetings, handing in reports, etc.…
                    </RoleParagraph>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>All Star Employee Award</RoleTitle>
                        <RoleDate>June 2025</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>In recognition of their exceptional contributions within our company and consistent 
                        demonstration of dedication and quality performance while fostering and creating a 
                        productive team environment.
                    </RoleParagraph>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Innovation & Creativity Award</RoleTitle>
                        <RoleDate>October 2024</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>They have great ideas to make their department/workplace a better place</RoleParagraph>
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
                        <RoleTitle>Dean's List</RoleTitle>
                        <RoleDate>June 2021</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>
                        In recognition of students who have demonstrated an unwavering commitment to academic excellence and achievement.
                        To earn a place on the Deans' List students must have a GPA of 3.4 or better for at least 12 semester hours of work. 
                    </RoleParagraph>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>President's List</RoleTitle>
                        <RoleDate>January 2021</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>
                        In recognition of outstanding academic achievement. This academic distinction is reserved for 
                        Bryant's highest achievers who earn a GPA of 4.0 or better for at least 12 semester hours of work.
                    </RoleParagraph>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Dean's List</RoleTitle>
                        <RoleDate>January 2021</RoleDate>
                    </RoleHeader>
                    <RoleParagraph>
                        In recognition of students who have demonstrated an unwavering commitment to academic excellence and achievement.
                        To earn a place on the Deans' List students must have a GPA of 3.4 or better for at least 12 semester hours of work. 
                    </RoleParagraph>
                </RoleContainer>
            </CompanyContainer>
        </Main>
    );
}