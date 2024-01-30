import styles from "./testbutton.module.css";
import React  from 'react';
const TestButton = ({ title, children, className = " ", ...props }) => {
  return (
    <div className={styles.box} onClick={props.click}>  &nbsp; </div>
  );
};

export default TestButton;
