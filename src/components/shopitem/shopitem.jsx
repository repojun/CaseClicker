import styles from "./shopitem.module.css";
import React from 'react';
import { IoDiamond } from 'react-icons/io5';


const ShopItem = ({ image, title, price, premium, square, click, className = "", ...props }) => {
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
                <div data-testid="cypress-store-button" className={styles.itemCardButtonContainer} onClick={click}>
                    <div className={`${premium ? styles.itemCardButtonPremium : styles.itemCardButton}`}>
                        {premium && (
                            <div style={{ display: 'flex', alignItems: 'center' }} >
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
