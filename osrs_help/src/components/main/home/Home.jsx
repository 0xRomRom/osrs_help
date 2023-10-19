import React, { useRef, useState, useEffect } from "react";
import stl from "./Home.module.css";

import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

const Home = () => {
  const usernameRef = useRef(null);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  const fetchUserData = async () => {
    const user = usernameRef.current.value;
    if (!user) return;
    const filteredUser = user.replaceAll(" ", "_");
    const obj = { user: filteredUser };
    try {
      const fetcher = await fetch(
        "http://localhost:9000/.netlify/functions/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const data = await fetcher.json();
      console.log(data.result);
      setSkills(data.result);
    } catch (err) {
      console.error(err);
    }
  };

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
        <div className={stl.userbox}>
          <form>
            <label>
              Username:
              <input type="text" className={stl.nameinput} ref={usernameRef} />
            </label>
          </form>
          <button className={stl.cta} onClick={fetchUserData}>
            Get stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
