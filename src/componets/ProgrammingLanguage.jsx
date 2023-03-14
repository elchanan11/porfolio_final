

import styled from "styled-components";
import SliderForLanguages from "./SliderForLanguages";
import SliderForServices from "./SliderForServices";
import {mobile} from "../responsive";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  
  padding:  35px 0;
  text-align: center;
  filter: grayscale(100%);
  transition: filter 0.9s ease;
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 500px) {
    filter: grayscale(0%);
  }
`


const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 55px;
  margin: 0;
  text-align: center;
  /* identical to box height, or 115% */
  color: #003C6A;
  ${mobile({fontSize:"16px", textAlign:"center"})}
`

const Title2 = styled.h2`
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 60px;
  /* or 125% */

  text-align: center;

  color: #003C6A;
  ${mobile({fontSize:"33px", textAlign:"center"})}
`



function ProgrammingLanguage() {
    return (
        <Conteiner >
            <Wrapper>
                <Title>
                    שפות
                </Title>
                <Title2>
                    שפות תכנות שאיתן אנו עובדים
                </Title2>
                <SliderForLanguages />
            </Wrapper>
        </Conteiner>
    );
}

export default ProgrammingLanguage;
