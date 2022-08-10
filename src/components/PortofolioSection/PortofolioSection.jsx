import { LIST_CARD } from "../../constants/Generals";
import Card from "../Card/Card";
import {
  BoxPorto,
  Container,
  ContentSerivces,
  ResumeSection,
} from "./_PortofolioSectionStyle";

const PortofolioSection = () => {
  return (
    <Container>
      <BoxPorto>My Portfolio</BoxPorto>
      <ContentSerivces>
        {LIST_CARD.map(({ icon, title, desc }) => (
          <Card src={icon} title={title} key={title} desc={desc} />
        ))}
      </ContentSerivces>
      <ResumeSection>test</ResumeSection>
    </Container>
  );
};

export default PortofolioSection;
