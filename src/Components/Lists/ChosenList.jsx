import { useContext, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ChosenList.module.css";
import passList from "../../Context/passList";
import PassFunction from "../../Context/passFunction";

const ChosenList = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const bothList = useContext(passList);
  const subHandlers = useContext(PassFunction);

  const chosenList = bothList.chosenList;
  let flag1 = true;
  let flag2 = true;

  if (chosenList.length < 1) {
    flag1 = false;
  }

  if (chosenList.length < 2) {
    flag2 = false;
  }

  const allGhostSubHandler = () => {
    subHandlers.deSelectAllHandler();
  };

  const subGhostHandler = (id) => {
    subHandlers.singleGhostSubdHandler(id);
  };

  const gambleHandler = () => {
    const startTime = new Date().getTime();
    let finalGhost = null;
    while (new Date().getTime() - startTime < 1000) {
      let randomGhost =
        chosenList[Math.floor(Math.random() * chosenList.length)];
      // const element = document.getElementById(randomGhost.id);
      // setHighlighted(true);
      setTimeout(() => setHighlighted(true), 1000);
      setHighlighted(false);
      // console.log(randomGhost);
      finalGhost  = randomGhost;
    }
    console.log(finalGhost);
  };

  return (
    <Card>
      <h2>CHOSEN</h2>
      <div className={styles.bar}></div>
      <div className={styles.fleft}>
        {chosenList.map((ghost) => (
          <button
            id={ghost.id}
            key={ghost.id}
            className={highlighted ? styles.picking : null}
            onClick={() => subGhostHandler(ghost.id)}
          >
            {ghost.name}
          </button>
        ))}
      </div>
      <div className={styles.buttonCenter}>
        <Button
          disabled={flag1}
          buttonName="DE-SELECT ALL"
          onClick={allGhostSubHandler}
        />
        <Button disabled={flag2} buttonName="GAMBLE" onClick={gambleHandler} />
      </div>
    </Card>
  );
};

export default ChosenList;
