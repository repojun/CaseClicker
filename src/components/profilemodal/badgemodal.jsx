import { React, useState } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import styles from "./profilemodal.module.css";

const BadgeModal = ({ modal, toggleModal }) => {
  const {
    userStore: {
      user: { badges = {} },
    },
  } = useContextStore();

  const badgesWithValueOne = Object.entries(badges).filter(([key, badgeData]) => badgeData.value === 1);

  const filteredBadges = badgesWithValueOne.map(([key, badgeData]) => ({
    id: key,
    viewname: badgeData.viewname,
    image: badgeData.image,
    value: badgeData.value,
  }));

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Select a badge</div>
            <div>Badges:</div>
            <div className={styles.badgeBlock}>
              <div className={styles.badgeContainer}>
                {filteredBadges
                  .reduce((rows, badge, index) => {
                    if (index % 4 === 0) rows.push([]);
                    rows[rows.length - 1].push(badge);
                    return rows;
                  }, [])
                  .map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.badgeRow}>
                      {row.map((badge) => (
                        <div key={badge.id} className={styles.badge}>
                          <img src={badge.image} className={styles.badgeImage} />
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div onClick={toggleModal}>
                <OutlineButton title="Close" minWidth={"80px"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(BadgeModal);
