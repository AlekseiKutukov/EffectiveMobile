import Search from "../../components/Search/Search";
import styles from "./Header.module.css";

const Header = ({ onSearchChange }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__line}>
          <h1 className={styles.header__title}>Каталог фильмов</h1>
          <div className={styles.header__search}>
            <Search onSearchChange={onSearchChange} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
