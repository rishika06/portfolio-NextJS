import Image from "next/image";
import styles from "../herosection.module.scss";

const ImageSection = () => {
  return (
    <div className={styles.heroSection__image}>
      <Image src="/image/dp1.jpeg" alt="dp" width={450} height={600} />
    </div>
  );
};

export default ImageSection;
