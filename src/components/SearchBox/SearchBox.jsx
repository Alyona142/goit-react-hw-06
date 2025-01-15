import { useId } from "react";

import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={s.searchContainer}>
      <label className={s.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => onFilter(e.target.value)}
        className={s.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
