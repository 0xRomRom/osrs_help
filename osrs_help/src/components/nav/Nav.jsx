import stl from "./Nav.module.css";
import logo from "../../assets/OSRSHELP.png";

const Nav = () => {
  return (
    <div className={stl.nav}>
      <img src={logo} alt="OSRS Help logo" className={stl.logo} />
    </div>
  );
};

export default Nav;
