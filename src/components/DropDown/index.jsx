import { Drop, DropMenu } from "./_DropDownStyle";

const DropDown = () => {
  return (
    <Drop>
      <DropMenu to={""}>Cheese</DropMenu>
      <DropMenu to={""}>Hamburger</DropMenu>
      <DropMenu to={""}>Lagsana</DropMenu>
    </Drop>
  );
};
export default DropDown;
