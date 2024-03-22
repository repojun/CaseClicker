import { React, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useContextStore from "../../context";
import styles from "./profile.module.css";
import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";

function Profile() {
  const {
    userStore: { user },
  } = useContextStore();

  let { username } = useParams();

  return (
    <MainContainer>
      <SubContainer>
        <div className={styles.flex}>
          <div className={styles.subContainer}>
            <div className={styles.subContainerTitle}>
              <img src="/circlepfp.png" alt=" " className={styles.avatar}></img>

              {username}
            </div>
          </div>
        </div>
      </SubContainer>
    </MainContainer>
  );
}

export default observer(Profile);
