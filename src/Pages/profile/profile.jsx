import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useContextStore from "../../context";
import styles from "./profile.module.css";
import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";
import Axios from "../../api/agent";
import { AiFillDollarCircle, AiFillHeart, AiFillCreditCard, AiFillCalculator  } from "react-icons/ai";


function Profile() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios("/api/user/username/exists", "POST", {
          username,
        });

        const date = new Date(response.registeredAt);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear().toString().slice(-2); 
        
        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;

        const finalDate = `${formattedDay}/${formattedMonth}/${year}`;
        response.registeredAt = finalDate;

        setUserData(response);
        console.log("USER DATA: " + userData);
      } catch (error) {
        // throw error using toast
      }
    };

    if (username) {
      getUser();
    }
  }, [username]);

  if (!username || !userData) return <div>User not found</div>;

  return (
    <>
      <MainContainer>
        <SubContainer>
          <div className={styles.flex}>
            <div className={styles.subContainer}>
              <div className={styles.subContainerSep}>
                <div className={styles.subContainerTitle}>
                  <img src="/circlepfp.png" alt=" " className={styles.avatar} />
                  <span>{userData ? userData.username : ""}</span>
                </div>

                <div className={styles.metricFlex}>
                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Net Worth </div>
                      <div className={styles.metricTitleValue}> <AiFillCreditCard size={22}/></div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>
                      {userData.balance.toFixed(2)}
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Total Balance </div>
                      <div className={styles.metricTitleValue}> <AiFillDollarCircle size={22}/></div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>182.89
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Statistic </div>
                      <div className={styles.metricTitleValue}> <AiFillCalculator size={22}/></div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>230.00
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Join Date </div>
                      <div className={styles.metricTitleValue}>
                        <AiFillHeart size={22}/>
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}></span>{userData.registeredAt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Profile);
