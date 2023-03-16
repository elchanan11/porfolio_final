import styled from "styled-components";
import logo from '../images/logo.png'
import {categories} from "../data";
import {leptop, mobile} from "../responsive";
import {Icon, IconButton} from '@mui/material';
import {Link} from "react-router-dom";
const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #FFFFFF;
  
  position: fixed;
  top: 0px;
  left: 0px;
  
  z-index: 99;
  box-shadow: 0 2px 2px -2px  #003C6A;
  ${mobile({position:"fixed",left:"0"})}
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  ${mobile({alignItems:"flexEnd"})}
`


const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 120px;
  margin-left: 12%;
  position: relative;
  ${mobile({display:"none"})}
`;

const CategoryItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  margin: 0 10px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  transition: all 0.2s ease-out;

  /* identical to box height */
  color: black;

  &:hover {
    scale: 1.1;
    color: #003C6A;
  }
`;



const MobileCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 7px 7px 0px 19px;
  gap: 20px;
  ${leptop({display:"none"})}
`;

const MobileCategoryItem = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #003C6A;
  transition: all 0.2s ease-out;
  &:hover,&:focus {
    scale: 1.1;
    background-color: #306387;
  }
  
`;
//
// const Icon = styled.img`
//   width: 20px;
//   height: 20px;
//
// `


const Left = styled.div`
  max-width:100px;
  display: flex;
  justify-content: flex-start;
  margin-left: 7%;
  ${mobile({marginLeft:"3px",padding:"5px",paddingLeft:"1px",paddingRight:"30px"})}
`
const Logo = styled.img`
  width: 138px;
  height: 70px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover{
    scale: 0.9;
  }
  ${mobile({width:"100%",height:"100%"})}

`

function NavBar() {
    return (
        <Conteiner >
            <Wrapper>
                <Left >
                    <Logo src={logo} alt={"תמונת לוגו"} />
                </Left>
                <Right>
                    <CategoryContainer>
                        {
                            categories.map(category=>
                                <CategoryItem key={category.id}>
                                    {
                                        category.title
                                    }
                                </CategoryItem>
                            )
                        }
                    </CategoryContainer>
                    <MobileCategoryContainer>
                        {
                            categories.map(category=>
                                <MobileCategoryItem key={category.id}>
                                    {
                                        <IconButton style={{color:"white"}}>{category.icon}</IconButton>
                                    }
                                </MobileCategoryItem>
                            )
                        }
                    </MobileCategoryContainer>
                </Right>
            </Wrapper>
        </Conteiner>
    );
}

export default NavBar;
