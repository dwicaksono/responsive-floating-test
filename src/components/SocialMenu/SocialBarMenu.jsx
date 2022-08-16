import { FLOAT_MENU } from "../../constants/Generals";
import { SocialBar } from "./_SocialBarMenuStyle";
import { Link } from "react-router-dom";

const SocialBarMenu = () => {
  return (
    <SocialBar>
      {FLOAT_MENU.map((icon) => (
        <Link to="/" key={icon}>
          <span className="material-symbols-outlined">{icon}</span>
        </Link>
      ))}
    </SocialBar>
  );
};

export default SocialBarMenu;
