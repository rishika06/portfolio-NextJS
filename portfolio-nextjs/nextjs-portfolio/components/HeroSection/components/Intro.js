import styles from "../herosection.module.scss";

const Intro = () => {
  return (
    <div className={styles.heroSection__introContainer}>
      <div className={styles.heroSection__introHeader}>
        <h1>
          Hey<span style={{ color: "#fe481c" }}>!</span> I am
        </h1>
        <h1>Rishika Kalita</h1>
      </div>
      <p className={styles.heroSection__introSubHeader}>
        Software Engineer(Frontend) based in Bangalore working for a project
        development company. I work on creating different web applications with
        high-quality code using{" "}
        <span style={{ color: "#fe481c", fontWeight: "600" }}>JavaScript </span>
        &<span style={{ color: "#fe481c", fontWeight: "600" }}> React</span>.
      </p>

      <div className={styles.heroSection__introButton}>
        <button className={styles.heroSection__introButton__hire}>
          Hire me
        </button>
        <button className={styles.heroSection__introButton__projects}>
          Projects
        </button>
      </div>
    </div>
  );
};

export default Intro;
