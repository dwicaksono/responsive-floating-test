import styled from "styled-components";

export const SocialBar = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
  z-index: 1;
  & a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: #525355;
    font-size: 20px;
    border: #525355 solid 1px;
    background-color: white;
  }
  & a:hover {
    background-color: #e1f5df;
    color: green;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
