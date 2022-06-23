import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.navbar_logo}>
          Rishika<span>.</span>
        </h1>
        {/* <ul className={styles.navbar_ul}>
          <li className={styles.navbar_li}>Home</li>
          <li className={styles.navbar_li}>About</li>
          <li className={styles.navbar_li}>Projects</li>
        </ul> */}
        <span className={styles.navbar_chat_button}>Let's chat!</span>
      </nav>
      <hr style={{ width: "74%" }} />
    </>
  );
};

export default NavBar;
