import styled from "styled-components";

export const Btn = styled.button`
  padding: 1rem 2rem;
  color: white;
  border-radius: 25px;
  border: 1px solid #f26d83;
  background-color: transparent;
  cursor: pointer;
  margin-top: ${({ mTop }) => mTop};
  margin-right: ${({ mRight }) => mRight};
`;
