import stl from "./Home.module.css";
import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";
import login from "../../../assets/wallpapers/Login.webp";

const Home = () => {
  return (
    <div className={stl.modal}>
      <div className={stl.imageBox}>
        <img src={barrows} alt="Banner Image" className={stl.bannerimage} />
      </div>
      <img src={welcometxt} alt="Welcome Text" className={stl.welcometxt} />
      <div className={stl.modalbottom}>
        <p className={stl.introtext}>
          A central place for Oldschool Runescape tools.
        </p>
        <div className={stl.userbox}>
          <span className={stl.getinfo}>Get Account Info</span>
          <img src={login} alt="Loginscreen" className={stl.loginbg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
