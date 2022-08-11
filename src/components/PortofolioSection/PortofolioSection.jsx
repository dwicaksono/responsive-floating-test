import { memo } from "react";
import { LIST_CARD } from "../../constants/Generals";
import Button from "../Button/Button";
import Card from "../Card/Card";
import {
  BoxPorto,
  Container,
  ContentSerivces,
  Desc,
  ResumeSection,
  Title,
} from "./_PortofolioSectionStyle";

const PortofolioSection = () => {
  const handlerClickDownload = () => {
    console.log("download cv");
  };

  return (
    <Container>
      <BoxPorto>My Portfolio</BoxPorto>
      <ContentSerivces>
        {LIST_CARD.map(({ icon, title, desc }) => (
          <Card src={icon} title={title} key={title} desc={desc} />
        ))}
      </ContentSerivces>
      <ResumeSection>
        <Title>Services</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum
          facilisis turpis eget tempor. Suspendisse potenti.
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum
          facilisis turpis eget tempor. Etiam in pharetra neque, ac vehicula ex.
        </Desc>
        <Desc>
          Proin at quam eget magna blandit consectetur nec tristique sapien. Sed
          blandit, quam eget tincidunt aliquam, metus ex cursus sem, vel
          vestibulum turpis urna eu purus.
        </Desc>
        <Button mRight="2rem" mTop="2rem" buttonClick={handlerClickDownload}>
          Dowload CV
        </Button>
        <Button>Check My Portfolio</Button>
      </ResumeSection>
    </Container>
  );
};

export default memo(PortofolioSection);
