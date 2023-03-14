import styled from "styled-components";
import about_im from '../images/about_us_img.png'

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
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  direction: rtl;
  justify-content: flex-end;
  margin-right: 5px;
  padding-bottom: 15px;
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
`

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 60px;
  /* or 125% */

  text-align: right;

  color: #333333;
`
const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* or 146% */

  text-align: right;

  color: #333333;
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
    transform: scale(0.9);
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`

const ImageConteiner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 10%;
`
const Image = styled.img`
  width: 400px;
  height: 400px;
  
`


function Home() {
    return (
        <Conteiner >
            <Wrapper>
                <Left>
                    <AboutUs>
                        עלינו
                    </AboutUs>
                    <Title>
                        אנחנו מודרניים ומיוחדים
                        לתכנות
                    </Title>
                    <Desc>
                        זהו פשוט טקסט דמה של תעשיית הדפוס והקביעת הקלדה היה טקסט הדמה הסטנדרטי של התעשייה מאז שנות ה-1500, כאשר מדפסת לא ידועה לקחה גלריה של סוג וערבכה אותה כדי ליצור ספר דגימות.
                        הוא שרד לא רק חמש מאות שנים, אלא גם את הקפיצה לתוך כתיבה אלקטרונית, שנותרה ללא שינוי.
                    </Desc>
                    <Button>
                        קרא עוד
                    </Button>
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
