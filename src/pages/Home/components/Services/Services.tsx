import { EmblaOptionsType } from "embla-carousel";
import styles from "./Services.module.css";
import Carousel from "../../../../components/Carousel/Carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  return (
    <div className={styles.services}>
      <h1>Buy anything you ever imagine</h1>
      <p className="body2">
        The easiest way to use your cryptocurrencies for everyday purchases.
      </p>

      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Services;
