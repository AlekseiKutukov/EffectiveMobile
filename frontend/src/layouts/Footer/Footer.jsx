import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className={styles.footer}>Каталог фильмов © {year}г</footer>;
};

export default Footer;
