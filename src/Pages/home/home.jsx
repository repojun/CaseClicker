import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [moneyArray, setMoneyArray] = useState([]);

  const move = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    const audio = new Audio("/sfx/coinSound.wav");
    audio.play();
    var Xlocation = e.clientX - 35;
    var Ylocation = e.clientY - 10;
    var newElement = (
      <div className={styles.money} style={{ top: Ylocation, left: Xlocation }}>
        $0.01
      </div>
    );
    setMoneyArray([...moneyArray, newElement]);
  };

  const navigateFunction = (page) => {
    navigate(page);
    const audio = new Audio("/sfx/clickButton.wav");
    audio.play();
  };

  return (
    <>
      <div style={{ top: 0, left: 0, position: "absolute" }}>{moneyArray}</div>
      <div className={styles.navbar}>
        <div className={styles.navFlexLeft}>
          <img src={"logo.png"} className={styles.navLogo} />
          <div className={styles.navItem} onClick={() => move("features")}>
            Features
          </div>
        </div>
        <div className={styles.navButtonContainer}>
          <div className={styles.navButton} onClick={() => navigateFunction("/login")}>
            Login
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <img className={styles.logo} src={"/logo.png"} onClick={handleClick} />
          <div className={styles.welcomeBox}>
            {/* <div className={styles.welcomeCaseClicker}>
              CASE CLICKER
            </div> */}
            <div className={styles.welcomeTitle}>
              THE ULTIMATE <span className={styles.welcomeCaseClicker}>IDLE CLICKER</span> GAME
            </div>
            <div className={styles.welcomeBody}>Inlcuding new, innovative and social features!</div>
            <div className={styles.buttonContainer}>
              <div className={styles.welcomeButtonLeft} onClick={() => navigateFunction("/dashboard/mainpage")}>
                Play NOW
              </div>
              <div className={styles.welcomeButtonRight} onClick={() => move("features")}>
                Features
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuresContainer}>
          <div id="features" className={styles.featuresTitle}>
            Key Features
          </div>
          <div className={styles.featuresSubtitle}>Innovative, social and fun features to keep you entertained!</div>

          <div className={styles.featuresBox}>
            <div className={styles.featuresBoxLeft}>
              <div className={styles.featuresBoxLeftTitle}>Inventory System</div>
              <div className={styles.featuresBoxLeftBody}>Our unique inventory system allows you to purchase lootboxes as well as collect and sell the items you retrieve from them to continue progressing in different ways!</div>
            </div>
            <div className={styles.featuresBoxRight}>
              <img className={styles.inventoryFeatureImage} src={"/gifInventory.gif"}></img>
            </div>
          </div>

          <div className={styles.featuresBox}>
            <div className={styles.featuresBoxLeft}>
              <img className={styles.messageBoardFeatureImage} src={"/gifImage.gif"}></img>
            </div>
            <div className={styles.featuresBoxRight}>
              <div className={styles.featuresBoxRightTitle}>Message Board</div>
              <div className={styles.featuresBoxRightBody}>The message board allows you to stay active with the rest of the game's community and share tips, strategies, and experiences, making every player's journey even more thrilling and interconnected.</div>
            </div>
          </div>
        </div>

        <div className={styles.featuresBox}>
          <div className={styles.featuresBoxLeft}>
            <div className={styles.featuresBoxLeftTitle}>Leaderboard</div>
            <div className={styles.featuresBoxLeftBody}>The leaderboard allows you to compete with fellow players as well as keep track of their progress, join the excitement and dominate the rankings!</div>
          </div>
          <div className={styles.featuresBoxRight}>
            <img className={styles.leaderboardFeatureImage} src={"/testimage3.png"}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
