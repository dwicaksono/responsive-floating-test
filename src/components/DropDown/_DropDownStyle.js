import styled from "styled-components";
import { Link } from "react-router-dom";

export const Drop = styled.div`
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  z-index: 1;
  left: 70;
  margin-top: 3rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const DropMenu = styled(Link)`
  text-decoration: none;
  text-align: left;
`;
