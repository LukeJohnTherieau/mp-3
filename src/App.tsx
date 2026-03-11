import Header from './components/Header.tsx'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import Home from './components/mains/Home.tsx'
import Education from './components/mains/Education.tsx'
import Employment from './components/mains/Employment.tsx'
import Skills from './components/mains/Skills.tsx'
import Awards from './components/mains/Awards.tsx'
import Projects from './components/mains/Projects.tsx'
import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router';
import styled from "styled-components";


const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    font-family: 'Source Sans 3', sans-serif;
    @media  screen and (max-width: 1000px) {
        width: 100vw;
    }                       
`;

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;  
    @media  screen and (max-width: 1000px) {
        flex-direction: column;
    }                                         
`;


function Root(){
  return (
    <>
    <PageWrapper>
      <Header />
      <NavMain>
        <Nav />
        <Routes>
          <Route 
            path = {'/'}
            element = {<Home />}
          />
          <Route 
            path = {'/index.html'}
            element = {<Home />}
          />
          <Route 
            path = {'/Home'}
            element = {<Home />}
          />
          <Route 
            path = {'/education'}
            element = {<Education />}
          />
          <Route 
            path = {'/education.html'}
            element = {<Education />}
          />
          <Route 
            path = {'/employment'}
            element = {<Employment />}
          />
          <Route 
            path = {'/employment.html'}
            element = {<Employment />}
          />
          <Route 
            path = {'/skills'}
            element = {<Skills />}
          />
          <Route 
            path = {'/skills.html'}
            element = {<Skills />}
          />
          <Route 
            path = {'/awards'}
            element = {<Awards />}
          />
          <Route 
            path = {'/awards.html'}
            element = {<Awards />}
          />
          <Route 
            path = {'/projects'}
            element = {<Projects />}
          />
          <Route 
            path = {'/projects.html'}
            element = {<Projects />}
          />
        </Routes>
      </NavMain>
      <Footer />
    </PageWrapper>
    </>
  );
}
const router = createBrowserRouter(
  [{path:"*",Component:Root}]
)

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
