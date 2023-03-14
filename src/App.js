import styled from "styled-components";
import Home from "./pages/Home";

const Conteiner = styled.div`
  margin: 0;
  padding: 0;
`

function App() {
  return (
    <Conteiner >
      <Home />
    </Conteiner>
  );
}

export default App;
