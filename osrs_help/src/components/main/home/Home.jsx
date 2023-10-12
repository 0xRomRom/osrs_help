import stl from "./Home.module.css";
import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

const Home = () => {
  return (
    <div className={stl.modal}>
      <div className={stl.imageBox}>
        <img src={barrows} alt="Banner Image" className={stl.bannerimage} />
      </div>
      <img src={welcometxt} alt="Welcome Text" className={stl.welcometxt} />
    </div>
  );
};

export default Home;
