import styled from "styled-components";
import bg from '../images/bussinessMen_bg.png'
import {mobile} from "../responsive";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${bg});
  background-size: 100%;
  background-position: left;
  
  background-color: #003C6A;
  position: relative;
`
const Wrapper = styled.div`

  margin: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  direction: rtl;
  background: linear-gradient(to bottom, #447494, #003C6A 50%);
  opacity: 0.9;
  ${mobile({gap:"25px"})}
`

const Title = styled.h3`
  font-style: normal;
  width: 60%;
  font-weight: 600;
  font-size: 28px;
  line-height: 65px;
  /* or 135% */
  margin-top: 20px;
  text-align: center;

  color: #FFFFFF;
  ${mobile({width:"100vw",fontSize: '24px' ,lineHeight:"39px", textAlign:"center" })}

`

const ContactButton = styled.button`
  width: 123px;
  height: 36px;
  font-size: 18px;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
  background-color: inherit;
  color: #FFFFFF;
  transition: transform 0.2s ease-in-out;
  &:hover,&:focus {
    transform: scale(1.2);
  }
  ${mobile({margin: '0' ,height:"40px",width:"120px"})}

`

function WayToContact() {
    return (
        <Conteiner >
            <Wrapper>
                <Title>
                    אנו מפתחים תוכנה מסוג שונה.
                    אתה מוזמן ליצור קשר ולבקש את ה-Webel שלך
                    פתרון IT
                </Title>
                <ContactButton>
                    צור קשר
                </ContactButton>
            </Wrapper>
        </Conteiner>
    );
}

export default WayToContact;
