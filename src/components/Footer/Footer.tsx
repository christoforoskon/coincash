import styles from "./Footer.module.css";
import coincash_white from "../../assets/COINCASH.png";

const Footer = () => {
  const handleSendClick = () => {
    console.log("Send button clicked");
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <h1 style={{ textAlign: "center" }}>
          Get started <span className={styles.primary}>today</span>
        </h1>
        <p className="body2" style={{ textAlign: "center" }}>
          Sing up to receive email updates on new products announcements,
          special promotions sales an more.
        </p>

        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Type your email here"
            className={styles.inputField}
          />
          <button className={styles.signUp} onClick={handleSendClick}>
            <p className="label1">Sing up</p>
          </button>
        </div>

        <div className={styles.subFooter}>
          <img src={coincash_white} alt="coincash logo" />
          <div className={styles.links}>
            <a href="#" className="label2">
              Privacy Policy
            </a>
            <a href="#" className="label2">
              Terms and conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
