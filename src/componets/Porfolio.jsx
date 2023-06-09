import styled from "styled-components";
import './style.css'
import tindog from '../images/tinDod.png'
import sneakers from '../images/sneakers.png'
import portfolio_lam from '../images/myParty.png'
import laptop from '../images/laptop.png'
import {mobile} from "../responsive";
import SliderForServices from "./SliderForServices";
import {Element} from "react-scroll";
import {useEffect, useRef, useState} from "react";
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
`;

const ProjectWrapper = styled.div`
  height: 350px;
  width: 350px;
  background-image: url(${laptop});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
const ProjectImageConteiner = styled.div`
  height: 165px;
  width: 263px;
  position: absolute;
  top: 75px;
  left: 40px;
  overflow: hidden; /* Hide the portion of the image outside the container */
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  transition: margin-top 3s ease-out;
  &:hover {
    margin-top: -${props => props.height - 165}px;
  }
`;



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

    const [imageHeight1, setImageHeight1] = useState(0);

    const handleImageLoad1 = (event) => {
        setImageHeight1(event.target.clientHeight);
    };



    const [imageHeight2, setImageHeight2] = useState(0);

    const handleImageLoad2 = (event) => {
        setImageHeight2(event.target.clientHeight);
    };


    const [imageHeight3, setImageHeight3] = useState(0);

    const handleImageLoad = (event) => {
        setImageHeight3(event.target.clientHeight);
    };


    return (
        <Element name="בנינו לאחרונה">
            <Conteiner >
                <TitleContenieer>
                    <PortfolioTitle>
                        פורטפוליו
                    </PortfolioTitle>
                    <Title
                        // ref={myComponentRef}
                    >
                        טעימה קטנה :)
                    </Title>
                </TitleContenieer>
                <ProjectsWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage
                                src={portfolio_lam}
                                onLoad={handleImageLoad1}
                                height={imageHeight1}
                            />
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage src={sneakers}
                                          onLoad={handleImageLoad2}
                                          height={imageHeight2}
                            />
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectImageConteiner>
                            <ProjectImage src={tindog}
                                          onLoad={handleImageLoad}
                                          height={imageHeight3}
                            />
                        </ProjectImageConteiner>
                    </ProjectWrapper>
                </ProjectsWrapper>
            </Conteiner>
        </Element>
    );
}

export default Portfolio;
