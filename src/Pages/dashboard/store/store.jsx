import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import styles from "./store.module.css";
import ShopItem from "../../../components/shopitem/shopitem";
import Axios from "../../../api/agent";
import { useState } from "react";
import Modal from "../../../components/modal/modal";


function Store() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");

    const toggleModal = (image) => {
        setModal(!modal);
        if (image != null) {
            setImage(image);
        }
    }

    const {
        userStore: { user, setBalance },
    } = useContextStore();

    const purchase = async (price, image) => {
        toggleModal(image);

        if (user.balance >= price) {
            console.log("Pre: " + user.balance)
            let newBalance = user.balance - price
            setBalance(newBalance)
            console.log("Post: " + user.balance)
            const query = await Axios("/api/user/setbalance", "POST", {
                balance: newBalance,
            });
        } else {
            console.log("Insufficient funds, would you like to purchase diamonds?")
        }
    };

    const shopItems = [
        { ID: 1, price: 450, title: "Random Item", image: "/recoilcasenew.png" },
        { ID: 2, price: 1000, title: "Normal Item", image: "/dreamnightmaresnew.png" },
        { ID: 3, price: 100, title: "Wordy Item", image: "/brokenfangnew.png" },
        { ID: 4, price: 15000, title: "Big Word Item", image: "/brokenfangnew.png" },
        { ID: 5, price: 750, title: "New Word Item", image: "/recoilcasenew.png" },
        { ID: 6, price: 250, title: "Testing Item", image: "/dreamnightmaresnew.png" }
    ];

    function chunkArray(array, size) {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    }
    const itemChunks = chunkArray(shopItems, 3);

    return (
        <>
            <MainContainer>
                <SubContainer>

                    <div className={styles.centerTitle}>
                        <Header title="Store" />
                    </div>
                    {itemChunks.map((chunk, index) => (
                        <div key={index} className={styles.itemContainer}>
                            {chunk.map((item, mapIndex) => (
                                <ShopItem key={mapIndex} price={`$${item.price.toFixed(2)}`} title={item.title} image={item.image} click={() => purchase(item.price, item.image)} />
                            ))}
                        </div>
                    ))}

                    <Modal modal={modal} toggleModal={toggleModal} image={image} />
                </SubContainer>
            </MainContainer>


        </>
    );
}

export default observer(Store);
