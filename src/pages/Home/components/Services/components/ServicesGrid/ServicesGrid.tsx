import styles from "./ServicesGrid.module.css";
import img1 from "../../../../../../assets/services/unsplash_tE6th1h6Bfk.png";
import img2 from "../../../../../../assets/services/unsplash_Xn5FbEM9564.png";

const ServicesGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.item}>
        <img src={img1} alt="Image 1" className={styles.image} />
        <div className={styles.text}>
          <h2>Shop anywhere </h2>
          <p>
            The easiest way to use your cryptocurrencies for everyday purchases.{" "}
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <img src={img2} alt="Image 2" className={styles.image} />
        <div className={styles.text}>
          <h2>Zero fees</h2>
          <p>
            The easiest way to use your cryptocurrencies for everyday purchases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
