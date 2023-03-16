import styled from "styled-components";
import {Slider} from "@mui/material";
import SliderForServices from "./SliderForServices";
import {mobile} from "../responsive";
import {Element} from "react-scroll";
import {useEffect, useRef} from "react";
import {handleAnimation} from "./animations";


const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  background: #003C6A;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  ${mobile({margin:" 80px",marginTop:"40px"})}
`
const OurServicedTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 65px;
  /* identical to box height, or 135% */

  text-align: center;

  color: #FFFFFF;
  ${mobile({fontSize:"33px", textAlign:"center"})}
`
const SubTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 65px;
  /* or 135% */

  text-align: center;

  color: #FFFFFF;
  ${mobile({fontSize:"16px", textAlign:"center"})}

`


function OurServices() {

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
        <Element name="שירותים">
            <Conteiner >
                <Wrapper>
                    <SubTitle>
                        שירותים
                    </SubTitle>
                    <OurServicedTitle
                        ref={myComponentRef}
                    >
                        השירותים שלנו
                    </OurServicedTitle>
                    <SliderForServices />
                </Wrapper>
            </Conteiner>
        </Element>
    );
}

export default OurServices;
