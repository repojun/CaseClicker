import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import styles from "./store.module.css";
import ShopItem from "../../../components/shopitem/shopitem";
import Axios from "../../../api/agent";
import { useState } from "react";
import Modal from "../../../components/storemodal/storemodal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreComponent from "../../../components/storecomponent/storecomponent";

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
  };

  const {
    userStore: { user, setBalance },
  } = useContextStore();

  const purchase = (price, image, itemName, entityName) => {
    toggleModal(image, itemName, price, entityName);
  };

  const finalPurchase = async (entityName) => {

    if (user.balance >= price) {

      let newBalance = user.balance - price;
      setBalance(newBalance);
      const query = await Axios("/api/user/setbalance", "POST", {
        balance: newBalance,
      });

      const query2 = await Axios("/api/user/setitem", "POST", {
        item: entityName,
        add: true
      });

      toast.success("💰 Purchase Completed!", {
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
  };

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
          <StoreComponent purchase={purchase} />
          <Modal
            modal={modal}
            toggleModal={toggleModal}
            finalPurchase={finalPurchase}
            image={image}
            itemName={itemName}
            price={price}
            entityName={entityName}
          />
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Store);
