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
            <title>Employment | Resume</title>
            <HomeTitle>Employment</HomeTitle>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../OMBI-vertical-dark-final.svg" alt="Ophthalmetrix BI Logo"></CompanyLogo>
                    <CompanyTitle>Ophthalmetrix BI</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Full Stack Developer, Co-Founder</RoleTitle>
                        <RoleDate>January 2025 - Present</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>Designed, developed, and maintained a full-stack web application, initially built with Django and then refactored to ASP.NET</RoleLi>
                        <RoleLi>Worked with SQL Server to design, query, and optimize the data storage and retrieval processes for client facing dashboards</RoleLi>
                        <RoleLi>Collaborated with data engineers, business analysts, and stakeholders to understand requirements and deliver quality solutions via Agile</RoleLi>
                        <RoleLi>Deployed and administered Azure Function Apps to enable event-driven workflows and system integrations</RoleLi>
                        <RoleLi>Developed ETL workloads that leveraged APIs from various financial and medical management systems (QuickBooks, Nextech, ModMed, etc.)</RoleLi>
                    </RoleUl>
                </RoleContainer>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../images.jpg" alt="Rhode Island Hosuing Logo"></CompanyLogo>
                    <CompanyTitle>Rhode Island Housing</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Operations Support Specialist IT</RoleTitle>
                        <RoleDate>July 2022 - Present</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>Created workloads that leveraged various API's (FreshService, Azure DevOps, ShareFile, Smartsheet, SecretServer, GoTo)</RoleLi>
                        <RoleLi>Developed various ETLs to clean and map data before ingestion by the data warehouse (SQL Server)</RoleLi>
                        <RoleLi>Reduced the workload of the Sr. Operation Specialist by 40+ hours a month through Python-based automated reporting</RoleLi>
                        <RoleLi>Saved the company tens of thousands of dollars by creating scripts that parsed fixed-width files, replacing the need for Monarch</RoleLi>
                        <RoleLi>Utilized Selenium to create scripts that scraped data from various web-based applications</RoleLi>
                        <RoleLi>Shadowed loan servicing staff to gain exposure to the department's business and reporting procedures</RoleLi>
                        <RoleLi>Administered various government and external applications (Black Knight, FNMA, FHA, MERS, Tableau, Freddie Mac, REPAY, USDA)</RoleLi>
                        <RoleLi>Prioritized long and short-term projects and worked independently to meet established deadlines</RoleLi>
                    </RoleUl>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Client Services Engineer -Intern</RoleTitle>
                        <RoleDate>July 2021 - July 2022</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>Initiated the process of replacing an older application, with an in-house, Python-based solution</RoleLi>
                        <RoleLi>Utilized Microsoft's Power Automate to create a booking app for external clients to schedule appointments with staff</RoleLi>
                        <RoleLi>Created an ad hoc Python script, which interacted with a Census API to find the tract code of every address in RI. 
                            Data gathered would have been used in the approval process of services provided by Homeownership</RoleLi>
                        <RoleLi>Provided Tier 1 and 2 support for end users</RoleLi>
                        <RoleLi>Prepared the laptop, workstation, and account of every new employee before their arrival</RoleLi>
                        <RoleLi>Trained all new employees on the organization's applications and security policies</RoleLi>

                    </RoleUl>
                </RoleContainer>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>Systems Engineer Intern</RoleTitle>
                        <RoleDate>May 2021 - July 2021</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>Communicated with employees to gather information and explain the resolution of IT-related incidents</RoleLi>
                        <RoleLi>Alerted the network team when an outages occurred, to ensure they'd have all the information required to resolve it</RoleLi>
                        <RoleLi>Imaged and prepared all new laptops the organization received</RoleLi>
                        <RoleLi>Learnt how to troubleshoot Office 365, Adobe & hardware-related issues</RoleLi>
                    </RoleUl>
                </RoleContainer>
            </CompanyContainer>
            <CompanyContainer>
                <CompanyHeader>
                    <CompanyLogo src="../../cropped-logo-1.png" alt="Geaux Network Logo"></CompanyLogo>
                    <CompanyTitle>Geaux Network</CompanyTitle>
                </CompanyHeader>
                <hr></hr>
                <RoleContainer>
                    <RoleHeader>
                        <RoleTitle>IT Support Intern</RoleTitle>
                        <RoleDate>May 2019 - August 2019</RoleDate>
                    </RoleHeader>
                    <RoleUl>
                        <RoleLi>Developed a Python-based chat program to ease communication between the control room and host of a podcast</RoleLi>	
                        <RoleLi>Learnt how to build a computer, based on specific business requirements</RoleLi>
                        <RoleLi>Maintained and updated Windows 10 computer systems, so they'd be ready at a moment's notice</RoleLi>
                        <RoleLi>Installed microphone and camera equipment to upgrade the studio for the use of podcasting</RoleLi>
                        <RoleLi>Assisted in the delicate process of removing and replacing a Macintosh computer's hard drive to preserve the data it contained</RoleLi>
                    </RoleUl>
                </RoleContainer>
            </CompanyContainer>
        </Main>
    );
}