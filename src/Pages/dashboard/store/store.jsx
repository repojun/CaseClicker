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
                                    Random Item
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/recoilcasenew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $450.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Super Item
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/dreamnightmaresnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $1000.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Wordy Item
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $100.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Big Word Item
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/brokenfangnew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $15,000.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    New Word Item
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/recoilcasenew.png"
                                    alt=''
                                ></img>
                                <div className={styles.itemCardButtonContainer}>
                                    <div className={styles.itemCardButton}>
                                        $750.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemCard}>
                            <div className={styles.itemCardBody}>
                                <div className={styles.itemCardHeader}>
                                    Testing Items
                                </div>
                                <img className={styles.itemCardImage}
                                    src="/dreamnightmaresnew.png"
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