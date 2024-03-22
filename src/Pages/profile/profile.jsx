import useContextStore from "../../context";
import styles from "./profile.module.css";
import React, {useState} from "react";
import { observer } from "mobx-react-lite";

function Profile() {
  const {
    userStore: { user },
  } = useContextStore();


  return (
    <div>
      Test Page
    </div>
  )
}

export default observer(Profile);