import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import { observer } from "mobx-react-lite";
import styles from "./store.module.css";
import ShopItem from "../../../components/shopitem/shopitem";

function Store() {
    return (
        <>
            <MainContainer>
                <SubContainer>
                        <div className={styles.centerTitle}>
                            <Header title="Store"> </Header>
                        </div>
                        <div className={styles.itemContainer}>
                            <ShopItem price="$450.00" title="Random Item" image="/recoilcasenew.png" />
                            <ShopItem price="$1000.00" title="Normal Item" image="/dreamnightmaresnew.png" />
                            <ShopItem price="$100.00" title="Wordy Item" image="/brokenfangnew.png" />
                        </div>
                        <div className={styles.itemContainer}>
                            <ShopItem price="$15,000.00" title="Big Word Item" image="/brokenfangnew.png" />
                            <ShopItem price="$750.00" title="New Word Item" image="/recoilcasenew.png" />
                            <ShopItem price="$250.00" title="Testing Item" image="/dreamnightmaresnew.png" />
                        </div>
                </SubContainer>
            </MainContainer>
        </>
    );
}

export default observer(Store);