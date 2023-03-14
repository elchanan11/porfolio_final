import styled from "styled-components";
import {Slider} from "@mui/material";
import SliderForServices from "./SliderForServices";
import {mobile} from "../responsive";


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
    return (
        <Conteiner >
            <Wrapper>
                <SubTitle>
                    שירותים
                </SubTitle>
                <OurServicedTitle>
                    השירותים שלנו
                </OurServicedTitle>
                <SliderForServices />
            </Wrapper>
        </Conteiner>
    );
}

export default OurServices;
