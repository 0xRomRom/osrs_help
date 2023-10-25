import stl from "./Nav.module.css";
import logo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import donate from "../../assets/icons/Donate.webp";

const Nav = (props) => {
  const handleTabSwitch = (tab) => {
    props.setActiveTab(tab);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.logo}>
        <img src={logo} alt="OSRS Help logo" className={stl.logoIcon} />
        <span className={stl.logoSpan}>OSRS Help</span>
      </div>

      <div className={stl.loggedUser}>
        {props.playerName && (
          <>
            <div className={stl.blueDot}></div>
            <span className={stl.loggedInUser}>{props.playerName}</span>
          </>
        )}
      </div>
      <nav className={stl.nav}>
        <ul className={stl.navlist}>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "home" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("home")}
          >
            <img
              src={hometeleport}
              alt="Home Teleport Icon"
              className={stl.icon}
            />
            Home
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "skills" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("skills")}
          >
            <img src={stats} alt="Skills Icon" className={stl.icon} />
            Skill Calculators
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "combat" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("combat")}
          >
            <img src={combatoptions} alt="Combat Icon" className={stl.icon} />
            Combat Calculators
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "gear" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("gear")}
          >
            <img src={gear} alt="Gear Icon" className={stl.icon} />
            Gear Calculator
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "xp" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("xp")}
          >
            <img src={xptable} alt="XP Icon" className={stl.icon} />
            XP Table
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "donate" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("donate")}
          >
            <img src={donate} alt="Donate Icon" className={stl.icon} />
            Donate
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
