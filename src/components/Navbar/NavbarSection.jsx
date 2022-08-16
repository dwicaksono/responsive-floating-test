import { Link, useNavigate } from "react-router-dom";
import { stringify } from "query-string";
import {
  BoxIcon,
  BoxIconBar,
  CloseWrap,
  ContainerMenu,
  ContentMenu,
  Input,
  MenuLink,
  Navbar,
  SearchAndCartContainer,
  WrapMenuVertical,
} from "./_NavbarStyle";
import { MENU_NAVBAR } from "../../constants/Generals";
import { useState } from "react";
import DropDown from "components/DropDown";

const NavbarSection = () => {
  const navigate = useNavigate();
  const [isVerticalMenu, setIsVerticalMenu] = useState(false);
  const [isSearchField, setIsSearchField] = useState(false);
  const [search, setSearch] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);

  const showVerticalMenu = () => {
    setIsVerticalMenu((prev) => !prev);
  };

  const showSearch = () => {
    setIsSearchField((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = { search: search };
    navigate(`/?${stringify(params)}`);
  };

  const onMouseEnter = (menu) => {
    if (window.innerWidth < 991 || menu !== "Demos") {
      setIsDropdown(false);
    } else {
      setIsDropdown(true);
    }
  };

  // const onMouseLeave = (menu) => {
  //   if (window.innerWidth < 991) {
  //     setIsDropdown(false);
  //   } else {
  //     setIsDropdown(false);
  //   }
  // };

  return (
    <>
      <Navbar>
        <ContainerMenu vert={isVerticalMenu}>
          <ContentMenu>
            {MENU_NAVBAR.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onMouseEnter={() => onMouseEnter(item.menu)}
                // onMouseLeave={() => onMouseLeave(item.menu)}
              >
                {item?.menu}
              </Link>
            ))}
            {isDropdown && <DropDown />}
          </ContentMenu>
          <SearchAndCartContainer>
            <BoxIcon>
              <span className="material-symbols-outlined">shopping_cart</span>
            </BoxIcon>
            <BoxIcon>
              <span className="material-symbols-outlined" onClick={showSearch}>
                search
              </span>
            </BoxIcon>
            <form onSubmit={handleSubmit}>
              <Input
                show={isSearchField}
                onChange={(event) => setSearch(event.target.value)}
              />
            </form>

            <BoxIconBar onClick={showVerticalMenu}>
              {isVerticalMenu ? (
                <span className="material-symbols-outlined">close</span>
              ) : (
                <span className="material-symbols-outlined">menu</span>
              )}
            </BoxIconBar>
          </SearchAndCartContainer>
          {isVerticalMenu && (
            <WrapMenuVertical>
              {MENU_NAVBAR.map((item, index) => (
                <CloseWrap>
                  <MenuLink to={item.path} key={index}>
                    {item?.menu}
                  </MenuLink>
                </CloseWrap>
              ))}
            </WrapMenuVertical>
          )}
        </ContainerMenu>
      </Navbar>
    </>
  );
};

export default NavbarSection;
