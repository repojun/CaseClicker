import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";
import styles from "./messageboard.module.css";
import React, { useContext, useState, useEffect } from "react";
import Axios from "../../../api/agent";
import { useNavigate } from "react-router-dom";
import useContextStore from "../../../context";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { FaHeart } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

function MessageBoard() {
  const [messageContents, setMessageContents] = useState("");

  const navigate = useNavigate();

  const {
    userStore: { user },
  } = useContextStore();

  const handleInputChange = (event) => {
    setMessageContents(event.target.value);
  };
  return (
    <>
      <MainContainer>
        <SubContainer>
          <div className={styles.mainFlex}>
            <Header title="Message Board" />

            <div className={styles.messageContainerMain}>
              <div className={styles.messageContainerMainFlex}>
                <div className={styles.messageContainerFlex}>
                  <img src={`${user.profilePicture}`} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${user.username}`)}></img>
                  <textarea type="text" className={styles.searchBar} placeholder="What's on your mind?" value={messageContents} onChange={handleInputChange} />
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.outlineButton}> Post </div>
                </div>
              </div>
            </div>

            <div className={styles.messageContainer}>
              <div className={styles.messageContainerMainFlex}>
                <div className={styles.messageContainerFlex}>
                  <img src={`${user.profilePicture}`} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${user.username}`)}></img>
                  <div className={styles.profileDetailsFlex}>
                    <div className={styles.username}>Bobby</div>
                    <div type="text" className={styles.messageContents}>
                      Today was a very long day.
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainerMessage}>
                  <div className={styles.replyButton}>
                    <IoChatboxEllipses />
                  </div>
                  <span className={styles.comments}>0</span>
                  <div className={styles.likeButton}>
                    <FaHeart />
                  </div>
                  <span className={styles.likes}>0</span>
                </div>
              </div>
            </div>

            <div className={styles.messageContainer}>
              <div className={styles.messageContainerMainFlex}>
                <div className={styles.messageContainerFlex}>
                  <img src={`${user.profilePicture}`} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${user.username}`)}></img>
                  <div className={styles.profileDetailsFlex}>
                    <div className={styles.username}>Bobby</div>
                    <div type="text" className={styles.messageContents}>
                      Today was a very long day.
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainerMessage}>
                  <div className={styles.replyButton}>
                    <IoChatboxEllipses />
                  </div>
                  <span className={styles.comments}>0</span>
                  <div className={styles.likeButton}>
                    <FaHeart />
                  </div>
                  <span className={styles.likes}>0</span>
                </div>
              </div>
            </div>

            <div className={styles.messageContainer}>
              <div className={styles.messageContainerMainFlex}>
                <div className={styles.messageContainerFlex}>
                  <img src={`${user.profilePicture}`} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${user.username}`)}></img>
                  <div className={styles.profileDetailsFlex}>
                    <div className={styles.username}>Bobby</div>
                    <div type="text" className={styles.messageContents}>
                      Today was a very long day.
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainerMessage}>
                  <div className={styles.replyButton}>
                    <IoChatboxEllipses />
                  </div>
                  <span className={styles.comments}>0</span>
                  <div className={styles.likeButton}>
                    <FaHeart />
                  </div>
                  <span className={styles.likes}>0</span>
                </div>
              </div>
            </div>
            
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(MessageBoard);
