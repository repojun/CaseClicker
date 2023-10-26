import styles from "./mainpage.module.css";
import React, { useState, useEffect } from "react";
import MainContainer from "../../../components/maincontainer/maincontainer";
import SubContainer from "../../../components/subcontainer/subcontainer";

var baseClick = 0.01;
var multiplier = 1;

export default function MainPage() {
  const [balance, setBalance] = useState(0);
  const [moneyArray, setMoneyArray] = useState([]);


  return (
    <>
      <div style={{ top: 0, left: 0, position: "absolute" }}>{moneyArray}</div>
      <MainContainer>
        <SubContainer>
          <div style={{ display: "flex", columnGap: "8px", fontSize: "40px" }}>
            <div style={{ fontWeight: "bold" }}>Balance:</div>
            <span class={styles.priceTag}>
              ${Math.round(balance * 100) / 100}{" "}
            </span>
          </div>
          <div class={styles.maincontainer}>
            <div class={styles.circle} >
              Click to earn money!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}
