import { BoxIcon, Container, Desc, Title } from "./_CardStyle";

const Card = ({ src, title, desc }) => {
  return (
    <Container>
      <BoxIcon>
        <span class="material-symbols-outlined">dynamic_form</span>
      </BoxIcon>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default Card;
