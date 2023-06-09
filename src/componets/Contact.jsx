import styled from "styled-components";
import {mobile} from "../responsive";
import SliderForServices from "./SliderForServices";
import {Element} from "react-scroll";
import {useState} from "react";
import {useForm, ValidationError} from "@formspree/react";
import {useEffect, useRef} from "react";
import {handleAnimation} from "./animations";
import './animation.css'


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
  direction: rtl;
`

const Tilte1 = styled.h1`
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height */
  color: #003C6A;
  ${mobile({fontSize:"16px", textAlign:"center"})}
`

const Title2 = styled.h2`
  font-family: 'Roboto', sans-serif;  
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height, or 125% */


  color: #003C6A;
  ${mobile({fontSize:"40px", textAlign:"center"})}
`

const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: rtl;
  gap: 18px;
  
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
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);
  }
  ${mobile({width:"85%"})}
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
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);/
  }
  ${mobile({width:"85%"})}
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
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover,&:focus {
    transform: scale(1.1);
  }
  ${mobile({width:"85%"})}
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
  ${mobile({width:"85%"})}
`

const SubmittedConteiner = styled.div`
  width: 100%;
  height: 60vh;
 direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
`
const SubmittedText = styled.h1`
  font-size: 16px;
  font-weight: 300;
  padding-top: 70px;
  color: #003C6A;
`
const SubmittedTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
`
const SubmittedSubTitle = styled.h2`
  font-size: 23px;
  font-weight: 400;
  
`


function Contact() {
    /////////////////////////////////////Animations/////////////////////////////////
    const myComponentRef = useRef(null);

    useEffect(() => {
        const cleanup = handleAnimation(myComponentRef, 'pop-outin');

        return () => {
            cleanup();
        };
    }, []);
/////////////////////////////////////Animations/////////////////////////////////

    const [formData, setFormData] = useState({ name: '', telephone: '', message: '' });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const [state, handleSubmit] = useForm("xdovlawq");
    if (state.succeeded) {
        return (
            <Element name="צור קשר">
                <SubmittedConteiner>
                    <SubmittedText>
                        צעד ענק בדרך אל ההצלחה
                    </SubmittedText>
                    <SubmittedTitle>
                        הטופס נשלח בהצלחה!
                    </SubmittedTitle>
                    <SubmittedSubTitle>
                        ניצור עמכם קשר בהקדם האפשרי
                    </SubmittedSubTitle>
                </SubmittedConteiner>
            </Element>
        )

    }

    return (

            <Conteiner >
                <Wrapper>
                    <TitleConteiner>
                        <Element name="צור קשר">
                            <Tilte1>
                                צור קשר
                            </Tilte1>
                        </Element>
                        <Title2
                            ref={myComponentRef}
                        >
                            בואו נתקדם !
                        </Title2>
                    </TitleConteiner>
                    <form style={{width:"100%"}} onSubmit={handleSubmit} >
                        <InputConteiner>
                            <Name required id="name" type="name" name="name"  placeholder={"שם מלא"} />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <Number required id={"telephone"} name="telephone"  type={"telephone"} placeholder={"מספר טלפון"} />
                            <ValidationError
                                prefix="TELEPHONE"
                                field="telephone"
                                errors={state.errors}
                            />
                            <Text id={"message"} type={"message"} placeholder={"על מה נדבר ?"} name="message" />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <Button type="submit" disabled={state.submitting} >
                                שליחה
                            </Button>
                        </InputConteiner>

                    </form>
                </Wrapper>

            </Conteiner>
    );
}

export default Contact;
