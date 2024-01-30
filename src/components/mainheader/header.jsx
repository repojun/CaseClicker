import styles from "./header.module.css";
import React  from 'react';

const Header = ({ title, children, className = " ", ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainheader}> {title} </div>
    </div>
  );
};

export default Header;
