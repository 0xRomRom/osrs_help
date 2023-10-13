import stl from "./Home.module.css";
import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

const Home = () => {
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
          <div>
            <label>Username:</label>
            <input type="text" className={stl.nameinput} />
          </div>
          <button className={stl.cta}>Get stats</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
