import { React, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom"; 
import useContextStore from "../../context";

function Profile() {
  const {
    userStore: { user },
  } = useContext(useContextStore()); 

  let { username } = useParams(); 

  return <div className={styles.profile}>{username}</div>; 
}

export default observer(Profile);