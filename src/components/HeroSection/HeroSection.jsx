import {
  Container,
  ContentHero,
  ContentWordingHero,
  CTAButton,
  ParaG,
  Wave,
} from "./_HeroSectionStyle";

const imageLink =
  "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80";

const HeroSection = () => {
  return (
    <Container imgUrl={imageLink}>
      <ContentHero>
        <ContentWordingHero>
          <h3>Catering service in New York</h3>
          <h1>We use only then finest and freshest ingredients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <CTAButton>Request a quote</CTAButton>
        </ContentWordingHero>
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
