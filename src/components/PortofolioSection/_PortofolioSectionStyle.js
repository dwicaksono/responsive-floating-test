import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

const ContentBase = styled.div`
  background-color: #301f21;
`;

export const BoxPorto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
`;

export const ContentSerivces = styled(ContentBase)`
  display: grid;
  padding: 2rem;
  grid-template-columns: 50% 50%;
  gap: 2rem;
`;

export const ResumeSection = styled(ContentBase)`
  padding: 2rem;
`;
