import styles from "./premiumstore.module.css"
import SubContainer from "../../../components/subcontainer/subcontainer"
import MainContainer from "../../../components/maincontainer/maincontainer";
import { observer } from "mobx-react-lite";
import Header from "../../../components/mainheader/header";
import ShopItem from "../../../components/shopitem/shopitem";

function PremiumStore() {
    return (
        <MainContainer>
            <SubContainer>
                <div className={styles.centerTitle}>
                    <Header title="Premium Store"> </Header>
                </div>
                <div className={styles.itemContainer}>
                    <ShopItem price="500 Gems" square={true} premium={true} title="+1,000 Dollars" image="/coin1000.png" />
                    <ShopItem price="1000 Gems" square={true} premium={true} title="+10,000 Dollars" image="/coin10000.png" />
                    <ShopItem price="2500 Gems" square={true} premium={true} title="+100,000 Dollars" image="/coin100000.png" />
                </div>
                <div className={styles.itemContainer}>
                    <ShopItem price="500 Gems" square={true} premium={true} title="+1,000 Dollars" image="/coin1000.png" />
                    <ShopItem price="1000 Gems" square={true} premium={true} title="+10,000 Dollars" image="/coin10000.png" />
                    <ShopItem price="2500 Gems" square={true} premium={true} title="+100,000 Dollars" image="/coin100000.png" />
                </div>
            </SubContainer>
        </MainContainer>
    )
}

export default observer(PremiumStore);