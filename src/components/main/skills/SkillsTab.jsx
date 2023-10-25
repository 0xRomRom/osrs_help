import { useState } from "react";
import stl from "./SkillsTab.module.css";

import attackIcon from "../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../assets/skillicons/Mining.webp";
import strengthIcon from "../../../assets/skillicons/Strength.png";
import agilityIcon from "../../../assets/skillicons/Agility.webp";
import smithingIcon from "../../../assets/skillicons/Smithing.webp";
import defenceIcon from "../../../assets/skillicons/Defence.webp";
import herbloreIcon from "../../../assets/skillicons/Herblore.webp";
import fishingIcon from "../../../assets/skillicons/Fishing.webp";
import rangedIcon from "../../../assets/skillicons/Ranged.webp";
import thievingIcon from "../../../assets/skillicons/Thieving.webp";
import cookingIcon from "../../../assets/skillicons/Cooking.webp";
import prayerIcon from "../../../assets/skillicons/Prayer.webp";
import craftingIcon from "../../../assets/skillicons/Crafting.webp";
import firemakingIcon from "../../../assets/skillicons/Firemaking.png";
import magicIcon from "../../../assets/skillicons/Magic.webp";
import fletchingIcon from "../../../assets/skillicons/Fletching.webp";
import woodcuttingIcon from "../../../assets/skillicons/Woodcutting.webp";
import runecraftingIcon from "../../../assets/skillicons/Runecraft.webp";
import slayerIcon from "../../../assets/skillicons/Slayer.png";
import farmingIcon from "../../../assets/skillicons/Farming.webp";
import constructionIcon from "../../../assets/skillicons/Construction.webp";
import hunterIcon from "../../../assets/skillicons/Hunter.webp";

import AttackCalculator from "../skills/programs/attack/AttackCalculator";
import DefenceCalculator from "../skills/programs/defence/DefenceCalculator";

const SkillsTab = (props) => {
  const [skillClicked, setSkillClicked] = useState(false);
  const [clickedSkill, setClickedSkill] = useState("");

  const handleTabOpen = (skill, path) => {
    setSkillClicked(true);
    setClickedSkill(skill);
    props.setSubState(path);
  };

  return (
    <>
      {clickedSkill === "attack" ? (
        <AttackCalculator
          setSkillClicked={setSkillClicked}
          setClickedSkill={setClickedSkill}
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      ) : null}

      {clickedSkill === "defence" ? (
        <DefenceCalculator
          setSkillClicked={setSkillClicked}
          setClickedSkill={setClickedSkill}
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
        />
      ) : null}

      {!skillClicked && (
        <div className={stl.modal}>
          <div className={stl.modalInner}>
            <div
              className={`${stl.skill} ${stl.attack}`}
              onClick={() => handleTabOpen("attack", "Attack")}
            >
              <img src={attackIcon} alt="Attack Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Attack</span>
            </div>
            <div
              className={`${stl.skill} ${stl.defence}`}
              onClick={() => handleTabOpen("defence", "Defence")}
            >
              <img
                src={defenceIcon}
                alt="Attack Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Defence</span>
            </div>
            <div
              className={`${stl.skill} ${stl.strength}`}
              onClick={() => handleTabOpen("strength", "Strength")}
            >
              <img
                src={strengthIcon}
                alt="Strength Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Strength</span>
            </div>
            <div
              className={`${stl.skill} ${stl.hitpoints}`}
              onClick={() => handleTabOpen("hitpoints", "Hitpoints")}
            >
              <img
                src={hitpointsIcon}
                alt="Hitpoints Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Hitpoints</span>
            </div>
            <div
              className={`${stl.skill} ${stl.ranged}`}
              onClick={() => handleTabOpen("ranged", "Ranged")}
            >
              <img src={rangedIcon} alt="Ranged Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Ranged</span>
            </div>
            <div
              className={`${stl.skill} ${stl.prayer}`}
              onClick={() => handleTabOpen("prayer", "Prayer")}
            >
              <img src={prayerIcon} alt="Prayer Icon" className={stl.iconImg} />
              <span className={`${stl.skillName} ${stl.black}`}>Prayer</span>
            </div>
            <div
              className={`${stl.skill} ${stl.magic}`}
              onClick={() => handleTabOpen("magic", "Magic")}
            >
              <img src={magicIcon} alt="Magic Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Magic</span>
            </div>
            <div
              className={`${stl.skill} ${stl.cooking}`}
              onClick={() => handleTabOpen("cooking", "Cooking")}
            >
              <img
                src={cookingIcon}
                alt="Cooking Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Cooking</span>
            </div>
            <div
              className={`${stl.skill} ${stl.woodcutting}`}
              onClick={() => handleTabOpen("woodcutting", "Woodcutting")}
            >
              <img
                src={woodcuttingIcon}
                alt="Woodcutting Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Woodcutting</span>
            </div>
            <div
              className={`${stl.skill} ${stl.fletching}`}
              onClick={() => handleTabOpen("fletching", "Fletching")}
            >
              <img
                src={fletchingIcon}
                alt="Fletching Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Fletching</span>
            </div>
            <div
              className={`${stl.skill} ${stl.fishing}`}
              onClick={() => handleTabOpen("fishing", "Fishing")}
            >
              <img
                src={fishingIcon}
                alt="Fishing Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Fishing</span>
            </div>
            <div
              className={`${stl.skill} ${stl.firemaking}`}
              onClick={() => handleTabOpen("firemaking", "Firemaking")}
            >
              <img
                src={firemakingIcon}
                alt="Firemaking Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Firemaking</span>
            </div>
            <div
              className={`${stl.skill} ${stl.crafting}`}
              onClick={() => handleTabOpen("crafting", "Crafting")}
            >
              <img
                src={craftingIcon}
                alt="Crafting Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Crafting</span>
            </div>
            <div
              className={`${stl.skill} ${stl.smithing}`}
              onClick={() => handleTabOpen("smithing", "Smithing")}
            >
              <img
                src={smithingIcon}
                alt="Smithing Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Smithing</span>
            </div>
            <div
              className={`${stl.skill} ${stl.mining}`}
              onClick={() => handleTabOpen("mining", "Mining")}
            >
              <img src={miningIcon} alt="Mining Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Mining</span>
            </div>
            <div
              className={`${stl.skill} ${stl.herblore}`}
              onClick={() => handleTabOpen("herblore", "Herblore")}
            >
              <img
                src={herbloreIcon}
                alt="Herblore Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Herblore</span>
            </div>
            <div
              className={`${stl.skill} ${stl.agility}`}
              onClick={() => handleTabOpen("agility", "Agility")}
            >
              <img
                src={agilityIcon}
                alt="Agility Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Agility</span>
            </div>
            <div
              className={`${stl.skill} ${stl.thieving}`}
              onClick={() => handleTabOpen("thieving", "Thieving")}
            >
              <img
                src={thievingIcon}
                alt="Thieving Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Thieving</span>
            </div>
            <div
              className={`${stl.skill} ${stl.slayer}`}
              onClick={() => handleTabOpen("slayer", "Slayer")}
            >
              <img src={slayerIcon} alt="Slayer Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Slayer</span>
            </div>
            <div
              className={`${stl.skill} ${stl.farming}`}
              onClick={() => handleTabOpen("farming", "Farming")}
            >
              <img
                src={farmingIcon}
                alt="Farming Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Farming</span>
            </div>
            <div
              className={`${stl.skill} ${stl.runecrafting}`}
              onClick={() => handleTabOpen("runecrafting", "Runecrafting")}
            >
              <img
                src={runecraftingIcon}
                alt="Runecrafting Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Runecrafting</span>
            </div>
            <div
              className={`${stl.skill} ${stl.hunter}`}
              onClick={() => handleTabOpen("hunter", "Hunter")}
            >
              <img src={hunterIcon} alt="Hunter Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Hunter</span>
            </div>
            <div
              className={`${stl.skill} ${stl.construction}`}
              onClick={() => handleTabOpen("construction", "Construction")}
            >
              <img
                src={constructionIcon}
                alt="Construction Icon"
                className={stl.iconImg}
              />
              <span className={stl.skillName}>Construction</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsTab;
