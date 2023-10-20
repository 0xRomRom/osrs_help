import stl from "./Nav.module.css";
import logo from "../../assets/OSRSHELP.png";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import donate from "../../assets/icons/Donate.webp";
import { useState } from "react";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={stl.modal}>
      <img src={logo} alt="OSRS Help logo" className={stl.logo} />
      <nav className={stl.nav}>
        <ul className={stl.navlist}>
          <li
            className={`${stl.navitem} ${
              activeTab === "home" ? stl.active : ""
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
              activeTab === "skills" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("skills")}
          >
            <img src={stats} alt="Skills Icon" className={stl.icon} />
            Skills Calculators
          </li>
          <li
            className={`${stl.navitem} ${
              activeTab === "combat" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("combat")}
          >
            <img src={combatoptions} alt="Combat Icon" className={stl.icon} />
            Combat Calculators
          </li>
          <li
            className={`${stl.navitem} ${
              activeTab === "gear" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("gear")}
          >
            <img src={gear} alt="Gear Icon" className={stl.icon} />
            Gear Calculators
          </li>
          <li
            className={`${stl.navitem} ${activeTab === "xp" ? stl.active : ""}`}
            onClick={() => handleTabSwitch("xp")}
          >
            <img src={xptable} alt="XP Icon" className={stl.icon} />
            XP Table
          </li>
          <li
            className={`${stl.navitem} ${
              activeTab === "donate" ? stl.active : ""
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
