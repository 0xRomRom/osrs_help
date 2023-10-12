import stl from "./Nav.module.css";
import logo from "../../assets/OSRSHELP.png";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import donate from "../../assets/icons/Donate.webp";

const Nav = () => {
  return (
    <div className={stl.modal}>
      <img src={logo} alt="OSRS Help logo" className={stl.logo} />
      <nav className={stl.nav}>
        <ul className={stl.navlist}>
          <li className={stl.navitem}>
            <img
              src={hometeleport}
              alt="Home Teleport Icon"
              className={stl.icon}
            />
            Home
          </li>
          <li className={stl.navitem}>
            <img src={stats} alt="Skills Icon" className={stl.icon} />
            Skills Calculators
          </li>
          <li className={stl.navitem}>
            <img src={combatoptions} alt="Combat Icon" className={stl.icon} />
            Combat Calculators
          </li>
          <li className={stl.navitem}>
            <img src={gear} alt="Gear Icon" className={stl.icon} />
            Gear Calculators
          </li>
          <li className={stl.navitem}>
            <img src={xptable} alt="XP Icon" className={stl.icon} />
            XP Table
          </li>
          <li className={stl.navitem}>
            <img src={donate} alt="Donate Icon" className={stl.icon} />
            Donate
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
