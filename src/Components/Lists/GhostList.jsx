import { useContext } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./GhostList.module.css";
import PassList from "../../Context/passList";
import PassFunction from "../../Context/passFunction";

const GhostList = (props) => {
  const bothList = useContext(PassList);
  const addHandlers = useContext(PassFunction);

  const ghostList = bothList.ghostList;
  let flag = true;

  if (ghostList.length < 1) {
    flag = false;
  }

  const allGhostAddHandler = () => {
    addHandlers.selectAllHandler();
  };

  const addGhostHandler = (id) => {
    addHandlers.singleGhostAddHandler(id);
  };

  return (
    <Card>
      <h2>GHOSTS</h2>
      <div className={styles.bar}></div>
      <div className={styles.fleft}>
        {ghostList.map((ghost) => (
          <button key={ghost.id} onClick={() => addGhostHandler(ghost.id)}>
            {ghost.name}
          </button>
        ))}
      </div>
      <Button
        disabled={flag}
        buttonName="SELECT ALL"
        onClick={allGhostAddHandler}
      />
    </Card>
  );
};

export default GhostList;
