import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import { observer } from "mobx-react-lite";
import styles from "./store.module.css";


function Store() {
    return (
        <>
            <MainContainer>
                <SubContainer>
                    <div className={styles.centerTitle}>
                        <Header title="Store"> </Header>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Weapons Upgrade
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $250.00
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

export default observer(Store);