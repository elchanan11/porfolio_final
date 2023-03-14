import styled from "styled-components";
import bgIntro from '../images/intro_bg.png'
import introImg from '../images/intro_im.png'
import {Mail, WhatsApp} from "@mui/icons-material";
import {mobile} from "../responsive";


const Conteiner = styled.div`
  margin: 0;
  padding: 0;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #003C6A;
  ${mobile({flexDirection: 'column'})}
`
const Right = styled.div`
  flex: 1;
  margin-right: 10%;
  
`

const TextConteiner = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  direction: rtl;
`
const Text1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 45px;
  /* identical to box height, or 125% */

  text-align: right;

  color: #FFFFFF;
`

const Text2 = styled.h2`
  /* אנו מספקים את שירותי התכנות הטובים ביותר עבורך */
  
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  /* or 135% */

  text-align: right;

  color: #FFFFFF;
`

const Text3 = styled.h2`
  /* זהו פשוט טקסט דמה של תעשיית הדפוס והקביעת קלדההיה טקסט הדמה הסטנדרטי של התעשייה. */
  
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 35px;
  /* or 146% */

  text-align: right;

  color: #FFFFFF;
`

const ButtonConteiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  margin-bottom: 10px;
  margin-top: 20px;
  
`
const ButtonContact = styled.button`
  box-sizing: border-box;

  /* Auto layout */
  background-color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:100px;
  height: 30px;
  padding: 0px 0px;
  font-size: 18px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  color: white;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(0.9);
  }
`
const ButtonLetsStart = styled.button`
  
  background: #306387;
  border: 1px solid #003C6A;
  border-radius: 6px;
  width:100px;
  height: 30px;
  padding: 0px 0px;
  font-size: 18px;
  margin-left: 35px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover,&:focus {
    transform: scale(0.9);
  }
`

const Left = styled.div`
  flex: 1;
  background-image: url(${bgIntro});
  background-size: 80%;
  background-position: left;
  background-repeat: no-repeat;
  background-color: #003C6A; 
  
  display: flex;
  justify-content: flex-start;
`

const ImageConteiner = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  margin-left: 10%;
  margin-top: 100px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const IconConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`
const IconItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 7px;
  padding-right: 0;
  padding-top: 0;
  background-color: #fff;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 7px;
  transition: transform 0.2s ease-in-out;
  &:hover,&:focus {
    transform: scale(1.2);
  }
`


function Intro() {
    return (
        <Conteiner >
            <Wrapper>
                <Left>
                    <IconConteiner>
                        <IconItem>
                            <WhatsApp fontSize={"large"} style={{color:"green"}}  />
                        </IconItem>
                        <IconItem>
                            <Mail fontSize={"large"} style={{color:"orange"}}  />
                        </IconItem>
                    </IconConteiner>
                    <ImageConteiner>
                        <Image src={introImg} alt={"תמונת אדם ומחשב"} />
                    </ImageConteiner>
                </Left>
                <Right>
                    <TextConteiner>
                        <Text1>
                            הגיע הזמן להתקדם
                        </Text1>
                        <Text2>
                            אנו מספקים את שירותי התכנות הטובים ביותר עבורך
                        </Text2>
                        <Text3>
                            זהו פשוט טקסט דמה של תעשיית הדפוס והקביעת קלדההיה טקסט הדמה הסטנדרטי של התעשייה.
                        </Text3>
                    </TextConteiner>
                    <ButtonConteiner>
                        <ButtonContact>
                            צור קשר
                        </ButtonContact>
                        <ButtonLetsStart>
                            בוא נתחיל
                        </ButtonLetsStart>
                    </ButtonConteiner>
                </Right>
            </Wrapper>
        </Conteiner>
    );
}

export default Intro;
