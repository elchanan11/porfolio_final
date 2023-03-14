import styled from "styled-components";
import NavBar from "../componets/NavBar";
import Intro from "../componets/Intro";
import AboutUs from "../componets/AboutUs";
import OurServices from "../componets/OurServices";
import Porfolio from "../componets/Porfolio";
import WayToContact from "../componets/WayToContact";
import ProgrammingLanguage from "../componets/ProgrammingLanguage";
import Contact from "../componets/Contact";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
`

function Home() {
    return (
        <Conteiner >
            {/*<NavBar />*/}
            <Intro />
            <AboutUs />
            <OurServices />
            <Porfolio />
            <ProgrammingLanguage />
            <WayToContact />
            <Contact />
        </Conteiner>
    );
}

export default Home;