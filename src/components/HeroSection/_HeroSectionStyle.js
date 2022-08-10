import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${({ imgUrl }) => imgUrl});
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
`;

export const ContentHero = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const moveForever = keyframes`  
0% {
 transform: translate3d(-90px,0,0);
}
100% { 
  transform: translate3d(85px,0,0);
}
`;

export const ContentWordingHero = styled.div`
  width: 50%;
  padding-top: 5rem;
`;

export const Wave = styled.svg`
  position: relative;
  width: 100%;
  height: 10vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 80px;
`;

export const ParaG = styled.g`
  & > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

export const CTAButton = styled.button`
  border-radius: 30px;
  padding: 15px 25px;
  background: #77d60a;
  color: white;
  font-size: 1rem;
  outline: none;
  border-style: none;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
`;
