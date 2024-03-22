import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useContextStore from "../../context";
import styles from "./profile.module.css";
import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";
import Axios from "../../api/agent";

function Profile() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("1 I GOT HERE");
        const response = await Axios("/api/user/exists", "GET", { username });
        console.log("HERE" + response);
        setUserData(response);
      } catch (error) {
        console.log("2 I GOT HERE " + error);
      }
    };

    if (username) {
      console.log("3 I GOT HERE " + username);

      getUser();
    }
  }, [username]);

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
                      <div className={styles.metricTitle}> Inventory </div>
                      <div className={styles.metricTitleValue}> ^ 1.5%</div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>274.70
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Statistic </div>
                      <div className={styles.metricTitleValueNegative}>
                        {" "}
                        v 4.5%
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>182.89
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Statistic </div>
                      <div className={styles.metricTitleValue}> ^ 2.5%</div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>230.00
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Investment </div>
                      <div className={styles.metricTitleValueNegative}>
                        {" "}
                        v 0.8%
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>583.78
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
