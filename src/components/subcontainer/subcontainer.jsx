import styles from "./subcontainer.module.css";
import React  from 'react';
const SubContainer = ({ title, children, className = " ", ...props }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default SubContainer;
