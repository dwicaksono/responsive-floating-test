import Glass from "../../assets/icons/glass.svg";
import Cart from "../../assets/icons/cart.svg";
import Bar from "../../assets/icons/bars.svg";
import { Link } from "react-router-dom";
import {
  BoxIcon,
  BoxIconBar,
  ContainerMenu,
  ContentMenu,
  Input,
  Navbar,
  SearchAndCartContainer,
} from "./_NavbarStyle";
import { MENU_NAVBAR } from "../../constants/Generals";

const NavbarSection = () => {
  return (
    <Navbar>
      <ContainerMenu>
        <ContentMenu>
          {MENU_NAVBAR.map((menu, index) => (
            <Link to="/" key={menu + index}>
              {menu}
            </Link>
          ))}
        </ContentMenu>
        <SearchAndCartContainer>
          <BoxIcon>
            <img src={Cart} alt="icons" />
          </BoxIcon>
          <BoxIcon>
            <img src={Glass} alt="icons" />
          </BoxIcon>
          <BoxIconBar>
            <img src={Bar} alt="icons" />
          </BoxIconBar>
          <Input />
        </SearchAndCartContainer>
      </ContainerMenu>
    </Navbar>
  );
};

export default NavbarSection;
