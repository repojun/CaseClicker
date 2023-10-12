import styles from "./outlinebutton.module.css";
import React from 'react';
const OutlineButton = (props) => {
  return (
    <div style={{
      color: props.overrideColor, 
      border: "2px solid " + props.overrideColor, 
      "--backgroundColor": props.overrideColor,
      "--backgroundColorGlow": props.overrideColor,
    }} className={styles.outlineButton} onClick={props.click}>{props.title}</div>
  );
};

export default OutlineButton;
