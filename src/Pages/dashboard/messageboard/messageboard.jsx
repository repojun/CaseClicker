import SubContainer from "../../../components/subcontainer/subcontainer";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";
import styles from "./messageboard.module.css";
import React, { useState, useEffect } from "react";
import Axios from "../../../api/agent";
import { useNavigate } from "react-router-dom";
import useContextStore from "../../../context";
import { FaHeart } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

function MessageBoard() {
  const [messageContents, setMessageContents] = useState(null);
  const [messageData, setMessageData] = useState(null);

  const navigate = useNavigate();

  const {
    userStore: { user },
  } = useContextStore();

  const handleInputChange = (event) => {
    setMessageContents(event.target.value);
  };


  useEffect(() => {
    const getMessages = async () => {
      try {
         const response = await Axios("api/messages/getmessages");
        // Sort the messages based on the postedAt field in ascending order
        response.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
        // Reverse the order of the sorted array to display messages in descending order
        response.reverse();
        // Set the sorted messages in the component state
        console.log("HERE IS RESPONSE: " + response)
        setMessageData(response);
      } catch (error) {
        // Handle error
      }
    };
    
    getMessages();
  
   
  }, []);

  const handleConfirm = async () => {
    if (!messageContents) {
      console.log("Toast Error");
    } else {
      try {
        // Send the message
        await Axios("/api/messages/setmessage", "POST", {
          message: messageContents,
        });
        // After successfully sending the message, fetch the updated messages
        const response = await Axios("api/messages/getmessages");
        // Sort the messages based on the postedAt field in ascending order
        response.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
        // Reverse the order of the sorted array to display messages in descending order
        response.reverse();
        setMessageData(response);
      } catch (error) {
        // Handle error
      }
    }

  setMessageContents("");
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
                  <div className={styles.outlineButton} onClick={() => handleConfirm()}>
                    {" "}
                    Post{" "}
                  </div>
                </div>
              </div>
            </div>

            <div>
              {messageData !== null &&
                messageData.map((message, index) => (
                  <div className={styles.messageContainer} key={index}>
                    <div className={styles.messageContainerMainFlex}>
                      <div className={styles.messageContainerFlex}>
                        <img src={message.profilePicture} className={styles.avatar} alt="" onClick={() => navigate(`/profile/${message.username}`)} />
                        <div className={styles.profileDetailsFlex}>
                          <div className={styles.username}>{message.username}</div>
                          <div className={styles.messageContents}>{message.message}</div>
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
                        <span className={styles.likes}>{message.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(MessageBoard);
