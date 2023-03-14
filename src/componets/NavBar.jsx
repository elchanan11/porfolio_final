import styled from "styled-components";
import logo from '../images/logo.png'
import {categories} from "../data";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #FFFFFF;
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
`


const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 120px;
  margin-left: 12%;
  position: relative;
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


const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 7%;
`
const Logo = styled.img`
  width: 138px;
  height: 70px;
  transition: all 0.2s ease-out;
  &:hover{
    scale: 0.9;
  }
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
                                <CategoryItem id={category.id}>
                                    {
                                        category.title
                                    }
                                </CategoryItem>
                            )
                        }
                    </CategoryContainer>
                </Right>
            </Wrapper>
        </Conteiner>
    );
}

export default NavBar;
