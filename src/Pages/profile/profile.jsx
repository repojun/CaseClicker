import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useContextStore from "../../context";
import styles from "./profile.module.css";
import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";
import Axios from "../../api/agent";

function Profile() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios("/api/user/exists", "GET", { username });
        setUserData(response.data);
      } catch (error) {

      } 
    };

    if (username) {
      getUser();
    }
  }, [username]);

  return (
    <MainContainer>
      <SubContainer>
        <div className={styles.flex}>
          <div className={styles.subContainer}>
            <div className={styles.subContainerTitle}>
              <img src="/circlepfp.png" alt=" " className={styles.avatar} />
              <span>{userData ? userData.username : ''}</span>
            </div>
          </div>
        </div>
      </SubContainer>
    </MainContainer>
  );
}

export default observer(Profile);