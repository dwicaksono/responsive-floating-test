import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";

function App() {
  return (
    <AppContainer>
      <NavbarSection />
      <HeroSection />
      <div>test</div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
