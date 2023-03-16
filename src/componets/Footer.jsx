import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import {Facebook, GitHub, Mail, WhatsApp} from "@mui/icons-material";
import {categories} from "../data";
import logo1 from '../images/logoFooter.png'
import logo2 from '../images/Dark Logo (1).png'
import {leptop, mobile} from "../responsive";
import {IconButton} from "@mui/material";
import {Link} from "react-scroll";
import logo from "../images/logo.png";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
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
  display: flex;
  justify-content: center;
  ${leptop({display:"none"})}
`
const MobileMiddleLogo = styled.img`
  width: 150px;
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
const MiddleLink = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  /* or 219% */
  text-align: right;
  text-decoration: underline #FFFFFF 1px;
  background-color: #003C6A;
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
                            <Icon >
                                <a
                                    aria-label={'call the developer'}
                                    tabIndex={'0'}
                                    href="tel:+972539323849"
                                    style={{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}
                                >
                                    <CallIcon fontSize={"large"} />
                                </a>
                            </Icon>
                        </IconConteiner>
                        <IconConteiner>
                            <Icon>
                                <a style={{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}} href="mailto:elchanan.elsner@gmail.com" aria-label={'לחץ לשליחת אימייל אלינו'}>
                                    <Mail  fontSize={"large"} />
                                </a>
                            </Icon>
                        </IconConteiner>
                        <IconConteiner>
                            <Icon
                                onClick={()=>{
                                    let url = `https://wa.me/message/2Y5CTJJNWWN4E1`;

                                    window.open(url);}}
                            >
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
                                        <Link
                                            activeClass="active"
                                            to={category.title}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            key={category.id}
                                        >
                                            <MiddleLink >
                                                {
                                                    category.title
                                                }
                                            </MiddleLink>
                                        </Link>
                                    )
                                }
                            </MiddleLinksConteiner>
                        </MiddleLeft>
                        <MiddleRight>
                            <Link
                                activeClass="active"
                                to={"בית"}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <MiddleLogoConteiner>
                                    <MiddleLogo src={logo2} alt={"תמונת לוגו"}/>
                                </MiddleLogoConteiner>
                            </Link>
                            <MiddleText>
                                , נשמע קצת דפוק, אבל כל המילים האלו הם פשוט מילים אקראיות בעברית שכתבתי בלי שום משמעות מיוחדת.
                            </MiddleText>
                        </MiddleRight>
                        <MobileMiddleLogoConteiner>
                            <Link
                                activeClass="active"
                                to={"בית"}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >

                                <MobileMiddleLogo src={logo2} alt={"תמונת לוגו"}/>

                            </Link>
                        </MobileMiddleLogoConteiner>
                    </MiiddleWrapper>
                </Miiddle>
                <Bottom>
                    <SocialIcons>
                        <SocialIconConteiner>
                            <SocialIcon
                                onClick={()=>{
                                    let url = `https://www.facebook.com/profile.php?id=100089614880027&mibextid=LQQJ4d`;

                                    window.open(url);}}
                            >
                                <Facebook />
                            </SocialIcon>
                        </SocialIconConteiner>
                        <SocialIconConteiner>
                            <SocialIcon
                                onClick={()=>{
                                    let url = `https://github.com/elchanan11`;

                                    window.open(url);}}
                            >
                                <GitHub />
                            </SocialIcon>
                        </SocialIconConteiner>
                        <SocialIconConteiner>
                            <SocialIcon
                                onClick={()=>{
                                let url = `https://wa.me/message/2Y5CTJJNWWN4E1`;

                                window.open(url);}}>
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
