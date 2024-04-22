import React from "react";
import styles from "./Home.module.css";
import GhostList from "../Lists/GhostList";
import ChosenList from "../Lists/ChosenList";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.middle}>
        <GhostList />
        <ChosenList />
      </div>
    </React.Fragment>
  );
};

export default Home;
