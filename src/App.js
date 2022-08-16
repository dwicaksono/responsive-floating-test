import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./components/Navbar/NavbarSection";
import DemoPage from "./Pages/Demos";
import NotFound from "./components/NotFound";

function App() {
  return (
    <AppContainer>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<DemoPage />} />
        <Route path="*" element={<NotFound />} />
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
