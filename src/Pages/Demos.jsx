import HeroSection from "../components/HeroSection/HeroSection";
import PortofolioSection from "../components/PortofolioSection/PortofolioSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SocialBarMenu from "../components/SocialMenu/SocialBarMenu";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
  activate,
} from "firebase/remote-config";
import { app } from "../firebase";
import { useEffect, useState } from "react";

const DemoPage = () => {
  const [isFlagBar, setIsFlagBar] = useState(false);
  const remoteConfig = getRemoteConfig(app);
  remoteConfig.settings.minimumFetchIntervalMillis = 15000;

  useEffect(() => {
    fetchAndActivate(remoteConfig)
      .then(() => {
        const flag = getValue(remoteConfig, "isFloatBar").asBoolean();
        setIsFlagBar(flag);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isFlagBar && <SocialBarMenu />}
      <HeroSection />
      <ServiceSection />
      <PortofolioSection />
    </div>
  );
};

export default DemoPage;
