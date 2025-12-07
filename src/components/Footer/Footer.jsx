import BlockHeader from "../BlockHeader/BlockHeader";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cont}>
        <BlockHeader title="Contact" />

        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.cont}>
              <div className={styles.title}>Phone</div>
              <div className={styles.content}>+7 (499) 350-66-04</div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.cont}>
              <div className={styles.title}>Socials</div>
              <div className={styles.content}>
                <img src="http://localhost:3000/assets/img/Footer/insta.svg" alt="insta" />
                <img src="http://localhost:3000/assets/img/Footer/whatsapp.svg" alt="whatsapp" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.cont}>
              <div className={styles.title}>Address</div>
              <div className={styles.content}>
                Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.cont}>
              <div className={styles.title}>Working Hours</div>
              <div className={styles.content}>24 hours a day</div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0078e14aa4c6f945da2fea0649ad05c0e97b7fd588f396b606215fb067788848&amp;source=constructor" width="1360" height="550" title="map" frameBorder="0"></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
