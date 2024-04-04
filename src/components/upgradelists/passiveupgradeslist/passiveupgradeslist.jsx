import styles from "./passiveupgradeslist.module.css";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import Axios from "../../../api/agent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { MdFactory } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { FaBuilding, FaLaptopCode } from "react-icons/fa";

const PassiveUpgradesList = ({ frontendArray, moneyFunction, props }) => {
  const {
    userStore: { user, setBalance, setPassiveUpgrade, setPassiveUpgradeLevel, setPassivePower, getPassivePower },
  } = useContextStore();

  const [passiveIncome1, setPassiveIncome1] = useState(0);
  const [passiveIncome2, setPassiveIncome2] = useState(0);
  const [passiveIncome3, setPassiveIncome3] = useState(0);
  const [passiveIncome4, setPassiveIncome4] = useState(0);
  const [totalPassive, setTotalPassive] = useState(0);

  // useEffect(() => {
  //   if (user && user.passiveUpgrades) {
  //     setPassiveIncome1(0.01 * user.passiveUpgrades?.passiveUpgrade1?.level);
  //     setPassiveIncome2(0.04 * user.passiveUpgrades?.passiveUpgrade2?.level);
  //     setPassiveIncome3(0.08 * user.passiveUpgrades?.passiveUpgrade3?.level);
  //     setPassiveIncome4(0.16 * user.passiveUpgrades?.passiveUpgrade4?.level);

  //     let newTotalPassive = passiveIncome1 + passiveIncome2 + passiveIncome3 + passiveIncome4;
  //     setTotalPassive(() => newTotalPassive);
  //   }
  // }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade1?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.01 * user.passiveUpgrades?.passiveUpgrade1?.level;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade2?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.04 * user.passiveUpgrades?.passiveUpgrade2?.level;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade3?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.08 * user.passiveUpgrades?.passiveUpgrade3?.level;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade4?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.16 * user.passiveUpgrades?.passiveUpgrade4?.level;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  const clickCheck = async (e, price, isBought, ID) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (user.balance >= price) {
      const audio = new Audio("/sfx/clickButton.wav");
      audio.play();
      setBalance(user.balance);
      moneyFunction(price);
      setPassiveUpgrade(ID, 1);
      let newLevel = user.passiveUpgrades[`passiveUpgrade${ID}`].level++ + 1;
      getPassivePower();

      switch (ID) {
        case 1:
          setPassivePower(0.01);
          break;
        case 2:
          setPassivePower(0.04);
          break;
        case 3:
          setPassivePower(0.08);
          break;
        case 4:
          setPassivePower(0.16);
          break;
        default:
      }

      const newPassivePower = getPassivePower();
      setPassiveUpgradeLevel(ID, newLevel);

      await Axios("/api/user/setpassivepower", "POST", { passivePower: newPassivePower });
      await Axios("/api/user/setpassiveupgradelevel", "POST", { passiveUpgradeID: ID, newLevel: newLevel });
      await Axios("/api/user/setpassiveupgrade", "POST", {
        passiveUpgradeID: ID,
      });
    } else {
      const audio = new Audio("/sfx/error.wav");
      audio.play();
      var newElement = // Stores div in variable to be stored in useStateArray
        (
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
      ID: 1,
      title: "Factory",
      description: "Factories to produce materials!",
      price: (1 + Math.pow(1.14, user.passiveUpgrades?.passiveUpgrade1?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade1?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade1?.value,
      icon: <MdFactory />,
    },
    {
      ID: 2,
      title: "Restaurant",
      description: "Provide food and earn money!",
      price: (20 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade2?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade2?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade2?.value,
      icon: <IoRestaurant />,
    },
    {
      ID: 3,
      title: "Tech Company",
      description: "Sell computers and earn money!",
      price: (80 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade3?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade3?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade3?.value,
      icon: <FaLaptopCode />,
    },
    {
      ID: 4,
      title: "Building",
      description: "Buildings to earn money!",
      price: (150 + Math.pow(1.16, user.passiveUpgrades?.passiveUpgrade4?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade4?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade4?.value,
      icon: <FaBuilding />,
    },
  ];
  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = user.balance >= keyname.price ? "#15e815" : "red";

      return (
        <Tippy content={keyname.description + " | " + "Price: $" + keyname.price}>
          <div style={{ minWidth: "100%", color: priceChecker, border: "2px solid " + priceChecker, "--backgroundColor": priceChecker, "--backgroundColorGlow": priceChecker }} className={styles.upgradeButton} onClick={(event) => clickCheck(event, keyname.price, keyname.isBought, keyname.ID)}>
            <div style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", minWidth: "100%" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flex: "1", fontSize: "50px" }}> {keyname.icon}</div>
              <div style={{ justifySelf: "center", alignSelf: "center", flex: "10" }}>
                {keyname.title} <br></br> Cost: ${keyname.price} <br></br> Level: {keyname.level}
              </div>
            </div>
          </div>
        </Tippy>
      );
    }),
  ];
  return (
    <>
      <div style={{ fontSize: "20px" }}>
        Passive Power <span class={styles.priceTagNoBold}>${totalPassive?.toFixed(2)}</span>
      </div>
      {upgradeList}
    </>
  );
};

export default observer(PassiveUpgradesList);
