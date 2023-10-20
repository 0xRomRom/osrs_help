import React, { useRef, useState, useEffect } from "react";
import stl from "./Home.module.css";

import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";

const Home = () => {
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [skillsFetched, setSkillsFetched] = useState(false);
  const [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    if (skills || skillsExp) {
      console.log(skills);
      console.log(skillsExp);
      setSkillsFetched(true);
    }
  }, [skills, skillsExp]);

  return (
    <div className={stl.modal}>
      <div className={stl.imageBox}>
        <img src={barrows} alt="Banner" className={stl.bannerimage} />
      </div>
      <img src={welcometxt} alt="Welcome Text" className={stl.welcometxt} />
      <div className={stl.modalbottom}>
        <p className={stl.introtext}>
          A central place for OSRS tools.
          <br />
          <br />
          Get started quickly by fetching your account stats.
        </p>

        {skillsFetched ? (
          <UserBox
            skills={skills}
            playerName={playerName}
            switchTab={setSkillsFetched}
          />
        ) : (
          <LoginBox
            setSkills={setSkills}
            setSkillsExp={setSkillsExp}
            setPlayerName={setPlayerName}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
