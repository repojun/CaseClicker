import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";
import styles from "./leaderboard.module.css";

function Leaderboard() {
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
                  <img src="/ksjaaypanda.jpg" className={styles.avatarLargeFirst} alt=""></img>
                  <div className={styles.leaderboardName}>#1 KSJaay</div>
                  <span className={styles.balance}>$17,283.38</span>
                </div>
              </div>
              <div className={styles.topThreeCard}>
                <div className={styles.topThreeCardFlex}>
                  <img src="/raytf.png" className={styles.avatarLargeSecond} alt=""></img>
                  <div className={styles.leaderboardName}>#2 Raytf_</div>
                  <span className={styles.balance}>$9793.72</span>
                </div>
              </div>
              <div className={styles.topThreeCard}>
                <div className={styles.topThreeCardFlex}>
                  <img src="/stephen.png" className={styles.avatarLargeThird} alt=""></img>
                  <div className={styles.leaderboardName}>#3 iDetixx</div>
                  <span className={styles.balance}>$8329.27</span>
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
                    <td>Inventory</td>
                    <td>Net Worth</td>
                    <td>Profile</td>
                  </tr>
                  <tr>
                    <td>#4</td>
                    <td>
                      <div className={styles.flexy}>
                        <img src="/circlepfp.png" className={styles.avatar} alt=""></img> Bahpu
                      </div>
                    </td>
                    <td>4</td>
                    <td>£8</td>

                    <td>
                      <span className={styles.priceGain}> $4233.12</span>
                    </td>
                    <td>
                      <div className={styles.editButton} onClick={() => clickTest()}>
                        View
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#5</td>
                    <td>
                      <div className={styles.flexy}>
                        <img src="/ksjaaypanda.jpg" className={styles.avatar} alt=""></img> KSJaay
                      </div>
                    </td>
                    <td>8</td>
                    <td>£8.00</td>

                    <td>
                      <span className={styles.priceGain}> $3843.98 </span>
                    </td>
                    <td>
                      <div className={styles.editButton}> View</div>
                    </td>
                  </tr>
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
