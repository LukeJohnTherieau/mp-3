import styled from "styled-components";


const Main = styled.main`
    padding: 1% 2%;                             
    min-height: 100vh;                              
    background-color: #F4F2EE;
    text-align: center;                               
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

const HomeParagraph = styled.p`
    font-size: calc(8px + 1vw);                              
    padding: 2%;                                      
    text-align: left;
    @media  screen and (max-width: 1000px) {
        line-height: 100%;
        font-size: calc(10px + 2vw);
        padding: 2%;
    }       
`;

const HomeImage = styled.img`
    max-width: 40%;
`;


export default function Home(){
    return (
        
        <Main>
            <title>Home | Resume</title>
            <HomeTitle>Home</HomeTitle>
            <div>
                <HomeImage src="../../../IMG_3390.png" alt="Luke Therieau"></HomeImage>
                <HomeParagraph>
                    My name is Luke Therieau, and I'm currently a part-time BU MET graduate student, Co-Founder of Ophthalmetrix BI and a full-time employee of Rhode Island Housing. 
                    I'm also a Bryant University alum ('21). 
                    As an Operations Support Specialist at RIHousing, I administer various government/external applications and utilize Python to automate manual back-office tasks. 
                    My interests and areas of study include Automation, Software Development, Data Engineering, Big Data Analytics, AI/ML, Databases and Web Development. 
                    My professional goal is to develop secure and reliable software, that can leverage machine learning and artificial intelligence. 
                    I have a proficiency in Python, Java, C#, T-SQL, MySQL, R, PySpark, JavaScript, HTML, and CSS. 
                    I also have working knowledge of the following Frameworks/Libraries: pandas, NumPy, scikit-learn, Selenium, Flask, Django, openpyxl, Matplotlib, Beautiful Soup, nltk.
                </HomeParagraph>
            </div>
        </Main>
    );
}