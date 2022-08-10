import styled from "styled-components";

export const Navbar = styled.nav`
  background: white;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3rem;
  padding-left: 3rem;
  width: 100%;
  @media screen and (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const ContentMenu = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
  & a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
  }
`;

export const SearchAndCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0rem;
`;

export const BoxIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const BoxIconBar = styled(BoxIcon)`
  margin-right: 0rem;
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid black;
  &:focus {
    outline: none;
    box-shadow: unset;
    border-color: unset;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
