import styles from "./checkbox.module.css";
import React from "react";

const CheckBox = (props) => {
  // Extract props
  const { id, title, description } = props;

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    // Call the parent component's onChange function if provided
    if (props.onChange) {
      props.onChange(!props.checked);
    }
  };

  return (
    <div className={styles.flexBox}>
      <div>
        <div className={styles.nameContainer}>
          <span className={styles.settingName}>{title}</span>
          <span className={styles.settingDescription}>{description}</span>
        </div>
      </div>
      <div className={styles.checkboxWrapper46}>
        {/* Use props.checked to determine checkbox state */}
        <input
          className={styles.inpCbx}
          id={id}
          type="checkbox"
          checked={props.checked}
          onChange={handleCheckboxChange} // Call handleCheckboxChange on change
        />
        <label className={styles.cbx} htmlFor={id}>
          <span>
            <svg width="12px" height="10px" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;