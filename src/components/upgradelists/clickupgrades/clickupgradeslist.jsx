import styles from "./clickupgradeslist.module.css";
import "react-tooltip/dist/react-tooltip.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import React from "react";
import {
  BsFillCloudArrowDownFill,
  BsFillCheckCircleFill,
  BsFillCursorFill,
  BsFillClipboard2HeartFill,
  BsFillExclamationTriangleFill,
  BsFillEggFill,
} from "react-icons/bs";

const ClickUpgradesList = ({
  multiplierFunction,
  frontendArray,
  moneyFunction,
  balance,
  ...props
}) => {
  const clickCheck = (e, price, multiplier) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (balance >= price) {
      moneyFunction(price);
      multiplierFunction(multiplier);
    } else {
      var newElement = ( // Stores div in variable to be stored in useStateArray
        <div
          className={styles.priceLossAnimation}
          style={{
            top: Ylocation,
            left: Xlocation,
            fontSize: "30px",
            whiteSpace: "nowrap",
          }}
        >
          Broke
        </div>
      );
      frontendArray(newElement);
      setTimeout(() => {
        // REMOVE ARRAY ITEMS HERE
      }, 3000);
    }
  };

  const upgradeBoxes = [
    {
      title: "Super Click",
      description: "Doubles your click rate",
      price: 0.75,
      multiplier: 2,
      icon: <BsFillCursorFill />,
    },
    {
      title: "Cool upgrade",
      description: "Cool placeholder",
      price: 1,
      multiplier: 4,
      icon: <BsFillCheckCircleFill />,
    },
    {
      title: "Upgrade 2",
      description: "Cool placeholder 2",
      price: 1.25,
      multiplier: 4,
      icon: <BsFillCloudArrowDownFill />,
    },
    {
      title: "Upgrade 2",
      description: "Cool placeholder 2",
      price: 1.5,
      multiplier: 4,
      icon: <BsFillExclamationTriangleFill />,
    },
    {
      title: "Cool upgrade",
      description: "Cool placeholder",
      price: 1.75,
      multiplier: 4,
      icon: <BsFillEggFill />,
    },
    {
      title: "Super Click",
      description: "Doubles your click rate",
      price: 2.0,
      multiplier: 2,
      icon: <BsFillClipboard2HeartFill />,
    },
  ];

  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = balance >= keyname.price ? "#15e815" : "red";
      return (
        <div className={styles.grid}>
          <Tippy
            content={keyname.description + " | " + "Price: $" + keyname.price}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "40px",
                color: priceChecker,
                border: "2px solid " + priceChecker,
                "--backgroundColor": priceChecker,
                "--backgroundColorGlow": priceChecker,
              }}
              className={styles.upgradeButton}
              onClick={(event) =>
                clickCheck(event, keyname.price, keyname.multiplier)
              }
            >
              {keyname.icon}
            </div>
          </Tippy>
        </div>
      );
    }),
  ];
  return <>{upgradeList}</>;
};
export default ClickUpgradesList;
