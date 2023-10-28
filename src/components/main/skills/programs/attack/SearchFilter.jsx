import stl from "./SearchFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchFilter = () => {
  return (
    <div className={stl.modal}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={stl.magnifyer} />
      <input
        type="text"
        className={stl.monsterInput}
        placeholder="Search Monster"
      />
    </div>
  );
};

export default SearchFilter;
