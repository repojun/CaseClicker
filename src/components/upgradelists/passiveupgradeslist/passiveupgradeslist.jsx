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
    userStore: { user, setBalance, setPassiveUpgrade, setPassiveUpgradeLevel, setPassivePower, getPassivePower, getPassiveLimit, getPassiveIncomeStore, setPassiveIncomeStore },
  } = useContextStore();
  const passiveIncomeStore = getPassiveIncomeStore();
  const totalPassive = getPassivePower();
  const passiveLimit = getPassiveLimit();

  useEffect(() => {
    if (user && user.balance !== null) {
      if (!(passiveIncomeStore >= passiveLimit)) {
        const interval = setInterval(async () => {
          const passivePower = getPassivePower();
          const passiveIncomeStore = getPassiveIncomeStore();
          let newIncomeStore = passiveIncomeStore + passivePower;
          setPassiveIncomeStore(newIncomeStore);
          if (newIncomeStore != 0) {
            await Axios("/api/user/setpassiveincomestore", "POST", { income: newIncomeStore });
          }
        }, 1000);
        return () => clearInterval(interval);
      } else {
        setPassiveIncomeStore(passiveLimit);
      }
    }
  }, [user, passiveIncomeStore]);

  const passiveCollect = async (e) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    var newElement = // Stores div in variable to be stored in useStateArray
      (
        <div
          className={styles.priceGainAnimation}
          style={{
            top: Ylocation,
            left: Xlocation,
            fontSize: "30px",
            whiteSpace: "nowrap",
          }}
        >
          +${passiveIncomeStore.toFixed(3)}
        </div>
      );
    frontendArray(newElement);
    const audio = new Audio("/sfx/coinSound.wav");
    audio.play();
    let newBalanceVariable = user.balance + passiveIncomeStore;
    setPassiveIncomeStore(0);
    setBalance(newBalanceVariable);
    await Axios("/api/user/setpassiveincomestore", "POST", { income: 0 });
    const query = await Axios("/api/user/setbalance", "POST", {
      balance: newBalanceVariable,
    });
  };

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
          setPassivePower(0.0025);
          break;
        case 2:
          setPassivePower(0.01);
          break;
        case 3:
          setPassivePower(0.02);
          break;
        case 4:
          setPassivePower(0.04);
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
      price: (1 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade1?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade1?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade1?.value,
      power: user.passiveUpgrades?.passiveUpgrade1?.power,
      icon: <MdFactory />,
    },
    {
      ID: 2,
      title: "Restaurant",
      description: "Provide food and earn money!",
      price: (20 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade2?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade2?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade2?.value,
      power: user.passiveUpgrades?.passiveUpgrade2?.power,
      icon: <IoRestaurant />,
    },
    {
      ID: 3,
      title: "Tech Company",
      description: "Sell computers and earn money!",
      price: (100 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade3?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade3?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade3?.value,
      power: user.passiveUpgrades?.passiveUpgrade3?.power,
      icon: <FaLaptopCode />,
    },
    {
      ID: 4,
      title: "Building",
      description: "Buildings to earn money!",
      price: (250 + Math.pow(1.15, user.passiveUpgrades?.passiveUpgrade4?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade4?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade4?.value,
      power: user.passiveUpgrades?.passiveUpgrade4?.power,
      icon: <FaBuilding />,
    },
  ];
  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = user.balance >= keyname.price ? "#15e815" : "red";

      return (
        <Tippy content={keyname.description + " | " + "Passive Income: $" + keyname.power}>
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
        Passive Power <span class={styles.priceTagNoBold}>${totalPassive?.toFixed(3)}</span>
      </div>
      <div className={styles.upgradeButton} onClick={(event) => passiveCollect(event)}>
        Click To Collect: ${passiveIncomeStore?.toFixed(3)}/${[passiveLimit?.toFixed(2)]}
      </div>
      {upgradeList}
    </>
  );
};

export default observer(PassiveUpgradesList);
