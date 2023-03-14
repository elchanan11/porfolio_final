import styled from "styled-components";


const Conteiner = styled.div`
  margin: 0;
  padding:  70px 0;
`

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`


const TitleConteiner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Tilte1 = styled.h1`
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height */
  color: #003C6A;
`

const Title2 = styled.h2`
  font-family: 'Roboto', sans-serif;  
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height, or 125% */


  color: #003C6A;
`

const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: rtl;
  gap: 18px;
`

const DetailsConteiner = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  flex-direction: column;
`
const TextConteiner = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`

const Name = styled.input`
  width: 490px;
  height: 54px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background: rgba(217, 217, 217, 0.2);
  border: none;
`

const Number = styled.input`
  width: 490px;
  height: 54px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: rgba(217, 217, 217, 0.2);
  border: none;
`

const Text = styled.textarea`
  width: 490px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  background: rgba(217, 217, 217, 0.2);
  border: none;
`

const Button = styled.button`
  height: 50px;
  width: 500px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
  background: #003C6A;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover,&:focus {
    transform: scale(1.1);
  }
`

function Contact() {
    return (
        <Conteiner >
            <Wrapper>
                <TitleConteiner>
                    <Tilte1>
                        צור קשר
                    </Tilte1>
                    <Title2>
                        צור עימנו קשר
                    </Title2>
                </TitleConteiner>
                <form>
                    <InputConteiner>
                        <Name required type={"name"} placeholder={"שם מלא"} />
                        <Number required type={"tel"} placeholder={"מספר טלפון"} />
                        <Text type={"text"} placeholder={"על מה נדבר ?"} />

                        <Button>
                            שליחה
                        </Button>
                    </InputConteiner>

                </form>
            </Wrapper>

        </Conteiner>
    );
}

export default Contact;
