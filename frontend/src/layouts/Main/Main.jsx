import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.contentWrapper}>
      Main <br />
      <MovieCard />
    </main>
  );
};

export default Main;
