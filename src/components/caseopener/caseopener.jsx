import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import React from "react";
import styles from "./caseopener.module.css";

const CaseOpener = () => {
  const {
    userStore: { user },
  } = useContextStore();

 
};

export default observer(CaseOpener);
