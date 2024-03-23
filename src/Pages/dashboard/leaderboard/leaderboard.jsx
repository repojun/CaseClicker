import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";
import styles from "./leaderboard.module.css";
import React, { useContext, useState, useEffect } from "react";
import Axios from "../../../api/agent";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const response = await Axios("/api/user/topten", "GET", {});
        setLeaderboardData(response);
        console.log("LEADERBOARD DATA: ", response);
      } catch (error) {
        // toast
      }
    };

    if (leaderboardData === null) {
      getLeaderboard();
    }
  }, [leaderboardData]);

  if (!leaderboardData)
    return (
      <MainContainer>
        <SubContainer></SubContainer>
      </MainContainer>
    );

  const topThree = leaderboardData.slice(0, 3).map((user) => ({ username: user.username, balance: user.balance.toFixed(2), profilePicture: user.profilePicture }));
  const restOfLeaderboard = leaderboardData.slice(3).map((user) => ({ username: user.username, balance: user.balance.toFixed(2), profilePicture: user.profilePicture }));

  console.log("Top Three:", topThree);
  console.log("Rest of Leaderboard:", restOfLeaderboard);

  return (
    <>
      <MainContainer>
        <SubContainer>
          <div className={styles.mainFlex}>
            <Header title="Leaderboard"></Header>
            <div className={styles.titleSubtext}>View the best players in the game, nobody doing it like them.</div>
          </div>
          <div className={styles.mainFlex}>
            <div className={styles.topFlex}>
              <div className={styles.topThreeCard}>
                <div className={styles.topThreeCardFlex}>
                  <img src={`${topThree[0].profilePicture}`} className={styles.avatarLargeFirst} alt="" onClick={() => navigate(`/profile/${topThree[0].username}`)}></img>
                  <div className={styles.leaderboardName}>#1 {topThree[0].username}</div>
                  <span className={styles.balance}>${topThree[0].balance}</span>
                </div>
              </div>
              <div className={styles.topThreeCard}>
                <div className={styles.topThreeCardFlex}>
                  <img src={`${topThree[1].profilePicture}`} className={styles.avatarLargeSecond} alt="" onClick={() => navigate(`/profile/${topThree[1].username}`)}></img>
                  <div className={styles.leaderboardName}>#2 {topThree[1].username}</div>
                  <span className={styles.balance}>${topThree[1].balance}</span>
                </div>
              </div>
              <div className={styles.topThreeCard}>
                <div className={styles.topThreeCardFlex}>
                  <img src={`${topThree[2].profilePicture}`} className={styles.avatarLargeThird} alt="" onClick={() => navigate(`/profile/${topThree[2].username}`)}></img>
                  <div className={styles.leaderboardName}>#3 {topThree[2].username}</div>
                  <span className={styles.balance}>${topThree[2].balance}</span>
                </div>
              </div>
            </div>
            <div className={styles.bottomFlex}>
              <div className={styles.tableContainer}>
                <table className={styles.mainTable}>
                  <tr>
                    <th>Position</th>
                    <th>Username</th>
                    <td>Balance</td>
                    <td>Test</td>
                    <td>Net Worth</td>
                    <td>Profile</td>
                  </tr>
                  {restOfLeaderboard.map((user, index) => (
                    <tr key={index + 4}>
                      <td>#{index + 4}</td>
                      <td>
                        <div className={styles.flexy}>
                          <img src={`${user.profilePicture}`} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${user.username}`)}></img>{" "}
                          <div className={styles.username} onClick={() => navigate(`/profile/${user.username}`)}>
                            {user.username}
                          </div>
                        </div>
                      </td>
                      <td>${user.balance}</td>
                      <td>£8</td>
                      <td>
                        <span className={styles.priceGain} > ${user.balance}</span>
                      </td>
                      <td>
                        <div className={styles.editButton} onClick={() => navigate(`/profile/${user.username}`)}>
                          View
                        </div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Leaderboard);
