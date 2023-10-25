import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ mainState }) => {
  return (
    <div className={stl.paginationBar}>
      <div className={stl.blueDot}></div>
      <span className={stl.mainMenu}>{mainState}</span>
      <FontAwesomeIcon icon={faAngleRight} className={stl.arrowRight} />
    </div>
  );
};

export default Pagination;
