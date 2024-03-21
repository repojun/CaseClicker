import styles from "./checkbox.module.css";
import {React, useState} from "react";
const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the state
  };
  return (
    <div className={styles.checkboxWrapper46}>
      <input className={styles.inpCbx} id={props.id} type="checkbox" />
      <label className={styles.cbx} for={props.id}>
        <span>
          <svg width="12px" height="10px" viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{props.title}</span>
      </label>
    </div>
  );
};

export default CheckBox;
