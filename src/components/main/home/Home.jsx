import React, { useState, useEffect } from "react";
import stl from "./Home.module.css";

import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";

const Home = (props) => {
  const [skillsFetched, setSkillsFetched] = useState(false);

  useEffect(() => {
    if (props.skills || props.skillsExp) {
      setSkillsFetched(true);
    }
  }, [props.skills, props.skillsExp]);

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
            skills={props.skills}
            skillsExp={props.skillsExp}
            playerName={props.playerName}
            switchTab={setSkillsFetched}
          />
        ) : (
          <LoginBox
            setSkills={props.setSkills}
            setSkillsExp={props.setSkillsExp}
            setPlayerName={props.setPlayerName}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
