import Intro from "./components/Intro";
import ImageSection from "./components/Image";
import styles from "./herosection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Intro />
      <ImageSection />
    </div>
  );
};

export default HeroSection;
