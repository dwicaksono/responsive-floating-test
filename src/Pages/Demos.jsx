import HeroSection from "../components/HeroSection/HeroSection";
import PortofolioSection from "../components/PortofolioSection/PortofolioSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SocialBarMenu from "../components/SocialMenu/SocialBarMenu";

const DemoPage = () => {
  return (
    <div>
      <SocialBarMenu />
      <HeroSection />
      <ServiceSection />
      <PortofolioSection />
    </div>
  );
};

export default DemoPage;
