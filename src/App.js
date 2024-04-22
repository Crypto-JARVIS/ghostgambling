import React, { useState } from "react";
import Home from "./Components/Home/Home";
import PassList from "./Context/passList";
import PassFunction from "./Context/passFunction"

let ghostList = [
  {
    id: 1,
    name: "The Mimic",
  },
  {
    id: 2,
    name: "Myling",
  },
  {
    id: 3,
    name: "Shade",
  },
  {
    id: 4,
    name: "Thaye",
  },
  {
    id: 5,
    name: "Moroi",
  },
  {
    id: 6,
    name: "Revenant",
  },
  {
    id: 7,
    name: "Yokai",
  },
  {
    id: 8,
    name: "Demon",
  },
  {
    id: 9,
    name: "Wraith",
  },
  {
    id: 10,
    name: "Onryo",
  },
  {
    id: 11,
    name: "Raiju",
  },
  {
    id: 12,
    name: "Mare",
  },
  {
    id: 13,
    name: "Oni",
  },
  {
    id: 14,
    name: "Phantom",
  },
  {
    id: 15,
    name: "Obake",
  },
  {
    id: 16,
    name: "Banshee",
  },
  {
    id: 17,
    name: "Deogen",
  },
  {
    id: 18,
    name: "Hantu",
  },
  {
    id: 19,
    name: "Jinn",
  },
  {
    id: 20,
    name: "Poltergeist",
  },
  {
    id: 21,
    name: "Yurei",
  },
  {
    id: 22,
    name: "Spirit",
  },
  {
    id: 23,
    name: "The Twins",
  },
  {
    id: 24,
    name: "Goryo",
  },
];

const App = () => {
  const [chosenList, setChosenList] = useState([]);

  const selectAllHandler = () => {
    const allGhostList = ghostList;
    setChosenList((prevState) => prevState.concat(allGhostList));
    ghostList = [];
  };

  const deSelectAllHandler = () => {
    ghostList = ghostList.concat(chosenList);
    setChosenList([]);
  };

  const singleGhostAddHandler = (id) => {
    const singleGhost = ghostList.filter((obj) => obj.id === id);
    setChosenList((prevState) => prevState.concat(singleGhost));
    ghostList = ghostList.filter((obj) => obj.id !== id);
  };

  const singleGhostSubdHandler = (id) => {
    const singleGhost = chosenList.filter((obj) => obj.id === id);
    ghostList = ghostList.concat(singleGhost);
    setChosenList((chosenList) => chosenList.filter((obj) => obj.id !== id));
  };

  return (
    <React.Fragment>
      <PassList.Provider value={{ ghostList, chosenList }}>
        <PassFunction.Provider
          value={{
            selectAllHandler,
            deSelectAllHandler,
            singleGhostAddHandler,
            singleGhostSubdHandler,
          }}
        >
          <Home />
        </PassFunction.Provider>
      </PassList.Provider>
    </React.Fragment>
  );
};

export default App;
