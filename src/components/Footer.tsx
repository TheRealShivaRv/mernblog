import { FC } from "react";
import styles from "./Footer.module.scss";
const footerText = () => {
  const currentYear = new Date().getFullYear();
  return `Copyright © ${currentYear} The Mernblog Co.`;
};

const Footer: FC = () => {
  return (
    <div className={styles["footer"]}>
      {footerText()}
      <div>Built Using:- MySQL React.js Express.js</div>
    </div>
  );
};

export default Footer;
