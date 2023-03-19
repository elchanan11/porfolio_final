import styled from "styled-components";
import about_im from '../images/about_us_img.png'
import {mobile} from "../responsive";
import {Element, Link} from "react-scroll";
import {useEffect, useRef, useState} from "react";
import './animation.css'

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin:  70px 0;
  ${mobile({flexDirection:"column", width: "95%",justifyContent:"center",alignItems:"center"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  direction: rtl;
  justify-content: flex-end;
  margin-right: 5px;
  padding-bottom: 15px;
  ${mobile({gap:"15px",justifyContent:"center",alignItems:"center",width:"90%"})}
`

const AboutUs = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 55px;
  margin: 0;
  /* identical to box height, or 115% */
  text-align: right;
  color: #003C6A;
  ${mobile({fontSize:"16px", textAlign:"center"})}
`

const Title = styled.h2`
  direction: rtl;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 60px;
  /* or 125% */

  text-align: right;

  color: #003C6A;
  ${mobile({fontSize:"33px", textAlign:"center"})}
`
const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* or 146% */

  text-align: right;

  color: #333333;
  ${mobile({fontSize:"20px", textAlign:"center"})}
`
const Button = styled.button`
  
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
  ${mobile({marginTop:"16px",marginBottom:"16px",height:"45px",width:"130px", textAlign:"center"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  ${mobile({justifyContent:"center",alignItems:"center" })}
`

const ImageConteiner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 10%;
  ${mobile({margin:"0"})}
`
const Image = styled.img`
  width: 400px;
  height: 400px;
  ${mobile({width:"100vw", maxHeight:"100%"})}
`


function Home() {
    /////////////////////////////////////Animations/////////////////////////////////
    const myComponentRef = useRef(null);

    useEffect(() => {
        const cleanup = handleAnimation(myComponentRef, 'flipY');

        return () => {
            cleanup();
        };
    }, []);

    const myComponentRef2 = useRef(null);

    useEffect(() => {
        const cleanup2 = handleAnimation(myComponentRef2, 'lineUp');

        return () => {
            cleanup2();
        };
    }, []);


////////////the animation will happend each 30000 sec
     const handleAnimation = (componentRef, animationClass, minAnimationInterval) => {
        let isAnimating = false;
        let lastAnimationTime = null;
        let interval = null;

        const handleScroll = () => {
            const element = componentRef.current;
            if (element) {
                const { top, bottom } = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight && bottom > 0) {
                    const now = Date.now();
                    if (!isAnimating || (lastAnimationTime && now - lastAnimationTime >= minAnimationInterval)) {
                        isAnimating = true;
                        lastAnimationTime = now;
                        element.classList.add(animationClass);
                        interval = setInterval(() => {
                            element.classList.toggle(animationClass);
                            element.classList.toggle(animationClass + '-reverse');
                        }, 30000);
                    }
                } else {
                    clearInterval(interval);
                    isAnimating = false;
                    element.classList.remove(animationClass);
                    element.classList.remove(animationClass + '-reverse');
                }
            }
        };

        const handleFocus = () => {
            const element = componentRef.current;
            if (element && !isAnimating) {
                isAnimating = true;
                lastAnimationTime = Date.now();
                element.classList.add(animationClass);
                interval = setInterval(() => {
                    element.classList.toggle(animationClass);
                    element.classList.toggle(animationClass + '-reverse');
                }, 30000);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('focusin', handleFocus);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('focusin', handleFocus);
            clearInterval(interval);
            isAnimating = false;
            lastAnimationTime = null;
        };
    };



/////////////////////////////////////Animations/////////////////////////////////


    return (
        <Conteiner >
            <Wrapper>
                <Left>
                    <Element name="עלינו">
                        <AboutUs>
                            עלינו
                        </AboutUs>
                    </Element>
                    <Title id="my-component"
                           // ref={myComponentRef}
                          >
                          מה זה Webel ?
                    </Title>
                    <Desc
                        // ref={myComponentRef}
                    >
                        Webel הוקמה על ידי מפתח ומעצב אתרים נלהב שאהב את התעשייה מאז ילדותו. התשוקה שלנו היא ליצור אתרי אינטרנט יפים ומקצועיים אשר עולים על ציפיות הלקוחות שלנו. אנו עובדים בשיתוף פעולה הדוק עם כל לקוח כדי להבין את הצרכים והמטרות הייחודיות שלו, ולאחר מכן מתאימים את השירותים שלנו בהתאם. בין אם אתה בעל עסק קטן או תאגיד גדול, אנו מחויבים לספק שירות אמין,מקצועי ואישי העונה על הצרכים הספציפיים שלך.<br/> ב-Webel, ההתמקדות שלנו היא תמיד במתן הרמה הגבוהה ביותר של איכות ושביעות רצון הלקוחות. אנו מאמינים בבניית קשרים ארוכי טווח עם לקוחותינו, ואנו מחויבים לעזור להם להשיג את המטרות המקוונות שלהם.                    </Desc>
                    <Link
                        activeClass="active"
                        to={"צור קשר"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button>
                            בואו נתקדם !
                        </Button>
                    </Link>
                </Left>
                <Right>
                    <ImageConteiner>
                        <Image src={about_im} alt={"תמונת אדם ומחשב"} />
                    </ImageConteiner>
                </Right>
            </Wrapper>
        </Conteiner>
    );
}

export default Home;
