import styles from "./premiumstore.module.css";
import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import { observer } from "mobx-react-lite";
import Header from "../../../components/mainheader/header";
import ShopItem from "../../../components/shopitem/shopitem";
import useContextStore from "../../../context";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { useState } from "react";
import PaypalModal from "../../../components/paypalmodal/paypalmodal";

function PremiumStore() {
  const {
    userStore: { user, setPremiumBalance },
  } = useContextStore();

  const [modal, setModal] = useState(false);
  const [price, setPrice] = useState(0);

  const toggleModal = (price) => {
    setPrice(price);
    setModal(!modal);
  };

  const shopItems = [
    { ID: 1, price: 5.99, title: "+1,000 Dollars", image: "/coin1000.png" },
    { ID: 2, price: 25.99, title: "+10,000 Dollars", image: "/coin10000.png" },
    { ID: 3, price: 49.99, title: "+$100,000 Dollars", image: "/coin100000.png" },
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
          <PaypalModal toggleModal={toggleModal} modal={modal} price={price}>
            {" "}
          </PaypalModal>
          <div className={styles.centerTitle}>
            <Header title="Store" />
          </div>
          {itemChunks.map((chunk, index) => (
            <div key={index} className={styles.itemContainer}>
              {chunk.map((item, mapIndex) => (
                <ShopItem key={mapIndex} price={"$" + item.price.toFixed(2)} premium={true} title={item.title} image={item.image} square={true} click={() => toggleModal(item.price)} />
              ))}
            </div>
          ))}
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(PremiumStore);
