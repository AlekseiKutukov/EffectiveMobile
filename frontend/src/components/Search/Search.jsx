import { useState } from "react";
import styles from "./Search.module.css";

// Компонент принимает onSearchChange — функцию,
// которая будет вызываться при изменении ввода
const Search = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    onSearchChange(newValue);
  };

  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Поиск фильмов"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
