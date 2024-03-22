import useContextStore from "../../context";
import styles from "./profile.module.css";
import React, {useState, useParams} from "react";
import { observer } from "mobx-react-lite";

function Profile() {
  const {
    userStore: { user },
  } = useContextStore();

  let params = useParams();

  return (
    <div>
      {params.username}
    </div>
  )
}

export default observer(Profile);