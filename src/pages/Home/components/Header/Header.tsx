import styles from "./Header.module.css";
import frame from "../../../../assets/Frame 26.png";
import iphone from "../../../../assets/iphone mockup 1.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.upperText}>
          <h1>
            You can buy anything with{" "}
            <span style={{ color: "var(--color-primary)" }}>COINCASH</span>{" "}
          </h1>
          <p className="body2">
            The easiest way to use your cryptocurrencies for everyday purchases.
          </p>
          <button>Get the app</button>
        </div>
        <div className={styles.images}>
          <img src={frame} alt="frame" className={styles.frameImg} />
          <img src={iphone} alt="iphone" className={styles.iphoneImg} />
        </div>
      </div>
      <div className={styles.bottomText}>
        <p>over 200,000+ users have chosen COINCASH for everyday payments</p>
      </div>
    </div>
  );
};

export default Header;
