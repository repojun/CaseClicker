import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import styles from "./store.module.css";
import ShopItem from "../../../components/shopitem/shopitem";
import Axios from "../../../api/agent";
import { useState } from "react";
import Modal from "../../../components/modal/storemodal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Store() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [entityName, setEntityName] = useState("");

    const toggleModal = (image, itemName, price, entityName) => {
        setModal(!modal);
        setImage(image);
        setItemName(itemName);
        setPrice(price);
        setEntityName(entityName);
    }

    const {
        userStore: { user, setBalance },
    } = useContextStore();

    const purchase = (price, image, itemName, entityName) => {
        toggleModal(image, itemName, price, entityName);
    };

    const finalPurchase = async (entityName) => {
        if (user.balance >= price) {
            let newBalance = user.balance - price
            setBalance(newBalance)
            const query = await Axios("/api/user/setbalance", "POST", {
                balance: newBalance,
            });

            const query2 = await Axios("/api/user/setitem", "POST", {
                item: entityName,
            });

            toast.success('💰 Purchase Completed!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error("Insufficient Funds!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const shopItems = [
        { ID: 1, price: 450, title: "Random Item", image: "/recoilcasenew.png", entityName: "case1" },
        { ID: 2, price: 1000, title: "Normal Item", image: "/dreamnightmaresnew.png", entityName: "case2" },
        { ID: 3, price: 100, title: "Wordy Item", image: "/brokenfangnew.png", entityName: "case3" },
        { ID: 4, price: 15000, title: "Big Word Item", image: "/brokenfangnew.png", entityName: "case4" },
        { ID: 5, price: 750, title: "New Word Item", image: "/recoilcasenew.png", entityName: "case5" },
        { ID: 6, price: 250, title: "Testing Item", image: "/stockholmdust.png", entityName: "case6" }
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
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                    <div className={styles.centerTitle}>
                        <Header title="Store" />
                    </div>
                    {itemChunks.map((chunk, index) => (
                        <div key={index} className={styles.itemContainer}>
                            {chunk.map((item, mapIndex) => (
                                <ShopItem key={mapIndex} price={`$${item.price.toFixed(2)}`} title={item.title} image={item.image} click={() => purchase(item.price, item.image, item.title, item.entityName)} />
                            ))}
                        </div>
                    ))}

                    <Modal modal={modal} toggleModal={toggleModal} finalPurchase={finalPurchase} image={image} itemName={itemName} price={price} entityName={entityName} />
                </SubContainer>
            </MainContainer>
        </>
    );
}

export default observer(Store);
