import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import {Facebook, GitHub, Mail, WhatsApp} from "@mui/icons-material";
import {categories} from "../data";
import logo1 from '../images/logoFooter.png'
import logo2 from '../images/Dark Logo (1).png'
import {mobile} from "../responsive";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  ${mobile({paddingBottom:"90px"})}
`
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #003C6A;
`

const Icons = styled.div`
  width: 80%;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const IconConteiner = styled.div`
`

const Icon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #306387;
  color: #FFFFFF;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.2);
  }
`

const Line = styled.div`
  width: 81%;
  height: 1px;
  background-color: white;
  margin: 0 auto;
  border: none;
`

const Miiddle = styled.div`
  
  background: #003C6A;
  display: flex;
  justify-content: center;
  border: none;
`
const MiiddleWrapper = styled.div`
  width: 80%;
  padding: 50px 0;
  background: #003C6A;
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`
const MiddleRight = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({display:"none"})}

`

const MiddleLogoConteiner = styled.div`
  width: 100%;
  
`
const MiddleLogo = styled.img`
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);
  }
`
const MobileMiddleLogoConteiner = styled.div`
  width: 100%;
  
`
const MobileMiddleLogo = styled.img`
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);
  }
`
const MiddleText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  /* or 219% */
  direction: rtl;
  text-align: right;

  color: #FFFFFF;
  
`
const MiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({alignItems:"center"})}
`
const MiddleLinksConteiner = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({alignItems:"center",marginBottom:"30px"})}
`

const MiddleLinkTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: right;

  color: #FFFFFF;
`
const MiddleLink = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  /* or 219% */
  text-align: right;
  text-decoration: underline #FFFFFF 1px;

  color: #FFFFFF;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);
  }
`

const Bottom = styled.div`
  background-color: #306387;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const SocialIcons = styled.div`
  background: #306387;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const SocialIconConteiner = styled.div`
`

const SocialIcon = styled.div`
  height: 35px;
  width: 35px;
  margin: 0 12px ;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #306387;
  color: #FFFFFF;
  border-radius: 50%;
  border: #FFFFFF 1px solid;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.2);
  }
`
const CopyRightText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */
  direction: rtl;
  text-align: right;

  color: #FFFFFF;
`


function Footer() {
    return (
        <Conteiner >
            <Wrapper>
                <Top>
                    <Icons>
                        <IconConteiner>
                            <Icon>
                                <CallIcon fontSize={"large"} />
                            </Icon>
                        </IconConteiner>
                        <IconConteiner>
                            <Icon>
                                <Mail  fontSize={"large"} />
                            </Icon>
                        </IconConteiner>
                        <IconConteiner>
                            <Icon>
                                <WhatsApp  fontSize={"large"} />
                            </Icon>
                        </IconConteiner>
                    </Icons>
                    <Line />
                </Top>
                <Miiddle>
                    <MiiddleWrapper>
                        <MiddleLeft>
                            <MiddleLinkTitle>
                                קישורים מהירים
                            </MiddleLinkTitle>
                            <MiddleLinksConteiner>
                                {
                                    categories.map(category=>
                                        <MiddleLink key={category.id}>
                                            {
                                                category.title
                                            }
                                        </MiddleLink>
                                    )
                                }
                            </MiddleLinksConteiner>
                        </MiddleLeft>
                        <MiddleRight>
                            <MiddleLogoConteiner>
                                <MiddleLogo src={logo2} alt={"תמונת לוגו"}/>
                            </MiddleLogoConteiner>
                            <MiddleText>
                                , נשמע קצת דפוק, אבל כל המילים האלו הם פשוט מילים אקראיות בעברית שכתבתי בלי שום משמעות מיוחדת.
                            </MiddleText>
                        </MiddleRight>
                        <MobileMiddleLogoConteiner>
                            <MobileMiddleLogo src={logo2} alt={"תמונת לוגו"}/>
                        </MobileMiddleLogoConteiner>
                    </MiiddleWrapper>
                </Miiddle>
                <Bottom>
                    <SocialIcons>
                        <SocialIconConteiner>
                            <SocialIcon>
                                <Facebook />
                            </SocialIcon>
                        </SocialIconConteiner>
                        <SocialIconConteiner>
                            <SocialIcon>
                                <GitHub />
                            </SocialIcon>
                        </SocialIconConteiner>
                        <SocialIconConteiner>
                            <SocialIcon>
                                <WhatsApp />
                            </SocialIcon>
                        </SocialIconConteiner>
                    </SocialIcons>
                    <CopyRightText>
                        זכויות יוצרים @ 2023 Weblel - כל הזכויות שמורות
                    </CopyRightText>
                </Bottom>
            </Wrapper>

        </Conteiner>
    );
}

export default Footer;
