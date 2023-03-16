import styled from "styled-components";
import './style.css'
import phone from '../images/phone.png'
import sample from '../images/myParty.png'
import sneakers from '../images/sneakers.png'
import singer from '../images/singer.png'
import laptop from '../images/laptop.png'
import {mobile} from "../responsive";
import SliderForServices from "./SliderForServices";
import {Element} from "react-scroll";
import {useEffect, useRef} from "react";
import {handleAnimation} from "./animations";



const Conteiner = styled.div`
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
  color: #003C6A;
`
const TitleContenieer = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PortfolioTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 65px;
  ${mobile({fontSize:"16px", textAlign:"center"})}

`
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  padding: 0;
  ${mobile({fontSize:"33px", textAlign:"center"})}
`

const ProjectsWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: linear-gradient(to bottom, white 60%, #447494);
  @media (max-width: 500px) {
    background: linear-gradient(to bottom, white , #003C6A 65%);
  }
  ${mobile({flexDirection:"column", textAlign:"center"})}
`

const ProjectWrapper = styled.div`
  height: 350px;
  width: 350px;
  background-image: url(${laptop});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`
const ProjectImageConteiner = styled.div`
  height: 165px;
  width: 263px;
  position: absolute;
  top: 75px;
  left: 40px;
`
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  
  
`

function Portfolio() {

    /////////////////////////////////////Animations/////////////////////////////////
    const myComponentRef = useRef(null);

    useEffect(() => {
        const cleanup = handleAnimation(myComponentRef, 'flipY');

        return () => {
            cleanup();
        };
    }, []);
/////////////////////////////////////Animations/////////////////////////////////



    return (
        <Element name="בנינו לאחרונה">
            <Conteiner >
                <TitleContenieer>
                    <PortfolioTitle>
                        פורטפוליו
                    </PortfolioTitle>
                    <Title
                        ref={myComponentRef}
                    >
                        טעימה קטנה :)
                    </Title>
                </TitleContenieer>
                <ProjectsWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage src={sample}/>
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage src={sneakers}/>
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage src={singer}/>
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                </ProjectsWrapper>
            </Conteiner>
        </Element>
    );
}

export default Portfolio;
