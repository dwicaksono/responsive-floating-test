import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #332127;
  color: #a36c74;
  padding: 1rem;
  flex-direction: column;
`;

export const BoxIcon = styled.div`
  color: #a36c74;
  & span {
    font-size: 3rem;
  }
`;

export const Title = styled.p`
  color: #f26d83;
  font-size: 19px;
  font-weight: 800;
`;

export const Desc = styled.p`
  color: #a36c74;
  font-size: 16px;
  font-weight: 600;
`;
