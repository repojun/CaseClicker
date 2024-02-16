import styles from "./shopitem.module.css";
import React from 'react';

const ShopItem = ({ image, title, price, className = " ", ...props }) => {
    return (
        <div className={styles.itemCard}>
            <div className={styles.itemCardBody}>
                <div className={styles.itemCardHeader}>
                    {title}
                </div>
                <img className={styles.itemCardImage}
                    src={image}
                    alt=''
                ></img>
                <div className={styles.itemCardButtonContainer}>
                    <div className={styles.itemCardButton}>
                        {price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;
