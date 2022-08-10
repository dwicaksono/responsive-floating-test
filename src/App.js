import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./components/Navbar/NavbarSection";
import DemoPage from "./Pages/Demos";

function App() {
  return (
    <AppContainer>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<DemoPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;
