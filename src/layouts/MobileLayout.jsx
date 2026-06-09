import React from "react";
import styles from "./MobileLayout.module.css";

const MobileLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileContainer}>{children}</div>
    </div>
  );
};

export default MobileLayout;
