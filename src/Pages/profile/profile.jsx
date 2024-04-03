import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useContextStore from "../../context";
import styles from "./profile.module.css";
import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";
import Axios from "../../api/agent";
import { AiFillDollarCircle, AiFillHeart, AiFillCreditCard, AiFillCalculator } from "react-icons/ai";
import ProfileModal from "../../components/profilemodal/profilemodal";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [userPos, setUserPos] = useState(null);
  const { username } = useParams();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios("/api/user/username/exists", "POST", {
          username,
        });
        const userID = response.id;

        const date = new Date(response.registeredAt);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);

        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;

        const finalDate = `${formattedDay}/${formattedMonth}/${year}`;
        response.registeredAt = finalDate;

        setUserData(response);
        // setUserPos(leaderboardPos)
      } catch (error) {
        // throw error using toast
      }
    };

    if (username) {
      getUser();
    }
  }, [username]);

  if (!username || !userData)
    return (
      <MainContainer>
        <SubContainer>
        <div className={styles.subContainer} />
        </SubContainer>
      </MainContainer>
    );

  return (
    <>
      <MainContainer>
        <SubContainer>
          <ProfileModal modal={modal} toggleModal={toggleModal}></ProfileModal>
          <div className={styles.flex}>
            <div className={styles.subContainer}>
              <div className={styles.subContainerSep}>
                <div className={styles.subContainerTitle}>
                  <div className={styles.avatarWrapper}>
                    <img data-testid="cypress-profile-picture" src={`${userData.profilePicture}`} alt=" " className={styles.avatar} onClick={() => toggleModal()}></img>
                  </div>
                  <span>{userData ? userData.username : ""}</span>
                </div>

                <div className={styles.metricFlex}>
                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Net Worth </div>
                      <div className={styles.metricTitleValue}>
                        <AiFillCreditCard size={22} />
                      </div>
                    </div>
                    <div className={styles.metricValueNetWorth}>
                      <span className={styles.dollarNetWorth}>$</span>
                      {userData.netWorth.toFixed(2)}
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Balance </div>
                      <div className={styles.metricTitleValue}>
                        <AiFillCalculator size={22} />
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>$</span>
                      {userData.balance.toFixed(2)}
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Leaderboard Position </div>
                      <div className={styles.metricTitleValue}>
                        {" "}
                        <AiFillDollarCircle size={22} />
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}>#</span>123
                    </div>
                  </div>

                  <div className={styles.metricBlock}>
                    <div className={styles.metricTitleContainer}>
                      <div className={styles.metricTitle}> Join Date </div>
                      <div className={styles.metricTitleValue}>
                        <AiFillHeart size={22} />
                      </div>
                    </div>
                    <div className={styles.metricValue}>
                      <span className={styles.dollar}></span>
                      {userData.registeredAt}
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
