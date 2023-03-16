import styled from "styled-components";
import bgIntro from '../images/intro_bg.png'
import introImg from '../images/intro_im.png'
import bgintroMobileImg from '../images/bg_im_for mobile.png'
import {Mail, WhatsApp} from "@mui/icons-material";
import {leptop, mobile} from "../responsive";


const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  ${leptop({marginTop:"70px"})}
  
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
  ${mobile({order: '1',position:"relative",bottom:"-70px",display:"flex", flexDirection:"column",gap:"30px"})}
`

const TextConteiner = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  
  flex-direction: column;
  margin-top: 40px;
  direction: rtl;
  ${mobile({ alignItems:"center" , textAlign:"center",width:"100vw",gap:"15px"})}
`
const Text1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 45px;
  /* identical to box height, or 125% */
  text-align: right;
  color: #FFFFFF;
  ${mobile({fontSize: '16px'})}
`

const Text2 = styled.h2`
  /* אנו מספקים את שירותי התכנות הטובים ביותר עבורך */
  width: 90%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  /* or 135% */

  text-align: right;

  color: #FFFFFF;
  ${mobile({fontSize: '30px' ,lineHeight:"45px", textAlign:"center" })}
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
  ${mobile({fontSize: '16px' ,lineHeight:"20px", textAlign:"center"})}

`

const ButtonConteiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  margin-bottom: 10px;
  margin-top: 20px;
  ${mobile({flexDirection: 'column' ,justifyContent:"center",alignItems:"center",width:"100vw",gap:"18px"})}

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
    transform: scale(1.2);
  }
  ${mobile({margin: '0' ,height:"40px",width:"110px"})}
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
    transform: scale(1.2);
  }
  ${mobile({margin: '0' ,height:"40px",width:"110px"})}

`

const Left = styled.div`
  flex: 1;
  background-image: url(${bgIntro});
  background-size: 80%;
  
  background-repeat: no-repeat;
  background-color: #003C6A;
  display: flex;
  background-position: calc(0% - 19px) top;
  justify-content: flex-start;
  @media (max-width: 768px) {
    background-image: url(${bgintroMobileImg});
  }
  ${mobile({order: '2',width:"100vw",backgroundSize:"cover"})}
`

const ImageConteiner = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  margin-left: 10%;
  margin-top: 100px;
  // ${mobile({width:"100vw",marginLeft:"0",marginRight:"12px",justifyContent:"center"})}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({marginRight:"9px",width:"250px",widths:"250px"})}
`
const IconConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  position: fixed;
  bottom: 10px;
  left: -2px;
  transform: translateY(-50%);
  z-index: 99;
  
`
const IconItem = styled.div`
  width: 40px;
  height: 40px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(255, 255, 255,0.7);
  transform: scale(1.4);
  cursor: pointer;
  margin-right: 7px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 5);


  transition: transform 0.2s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.7);
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
                        {/*<IconItem>*/}
                        {/*    <Mail fontSize={"large"} style={{color:"orange"}}  />*/}
                        {/*</IconItem>*/}
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
                            {/*גלה את העוצמה בפיתוח אתר מותאם אישית לעסק שלך.                        */}
                            בנה את אתר החלומות שלך עם העזרה שלנו
                        </Text2>
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
