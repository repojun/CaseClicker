import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";
import styles from "./messageboard.module.css";
import React, { useContext, useState, useEffect } from "react";
import Axios from "../../../api/agent";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title="Message Board" />
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Leaderboard);
