import styled, { keyframes } from "styled-components";
import Logo from "../../src/logo192.png";

const imageLink =
  "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80";

const HeroSection = () => {
  return (
    <Container>
      <ContentHero urlImage={imageLink}>
        <div style={{ padding: "1rem 1rem" }}>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <CTAButton>Request a quote</CTAButton>
        </div>
      </ContentHero>
      <div>
        <Wave
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <ParaG>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </ParaG>
        </Wave>
      </div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  position: relative;
  text-align: center;
  background-image: url("https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80");
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const ContentHero = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const moveForever = keyframes`  
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

const Wave = styled.svg`
  position: relative;
  width: 100%;
  height: 10vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 80px;
`;

const ParaG = styled.g`
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

const CTAButton = styled.button`
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
