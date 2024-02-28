import styles from "./shopitem.module.css";
import React from 'react';
import { IoDiamond } from 'react-icons/io5';

const ShopItem = ({ image, title, price, premium, square, className = "", ...props }) => {
    return (
        <div className={styles.itemCard}>
            <div className={styles.itemCardBody}>
                <div className={styles.itemCardHeader}>
                    {title}
                </div>
                <img
                    className={`${styles.itemCardImage} ${square ? styles.itemCardImageSquare : ""}`}
                    src={image}
                    alt=''
                />
                <div className={styles.itemCardButtonContainer}>
                    <div className={styles.itemCardButton}>
                        {premium && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IoDiamond style={{ marginRight: '5px' }} />
                                {price}
                            </div>
                        )}
                        {!premium && price}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShopItem;
