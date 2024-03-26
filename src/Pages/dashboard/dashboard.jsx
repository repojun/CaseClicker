import MainContainer from "../../components/maincontainer/maincontainer";
import Header from "../../components/mainheader/header";
import SubContainer from "../../components/subcontainer/subcontainer";
import useContextStore from "../../context";
import styles from "./dashboard.module.css";
import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import CaseOpener from "../../components/caseopener/caseopener";

function Dashboard() {

  const { userStore: { user } } = useContextStore();
  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title={"Welcome back " + user.username}> </Header>
          <div className={styles.titleSubtext}>
            Have an indepth look at all your metrics with the dashboard.
          </div>
          <div className={styles.statisticsMainContainer}>
            <div className={styles.metricsContainer}>
              <div>
                <div className={styles.portfolioTitle}>Overall Portfolio</div>
                <div className={styles.metricContent}>
                  <div className={styles.metricMainBox}>
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
            <div className={styles.graphContainer}>
              <div className={styles.graphBox}>
                <img src="graph2.png" className={styles.avatar} alt=""></img>
              </div>
              <div className={styles.graphBox}>
                <img src="graph2.png" className={styles.avatar} alt=""></img>
              </div>
            </div>
          </div>
          <CaseOpener></CaseOpener>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Dashboard);