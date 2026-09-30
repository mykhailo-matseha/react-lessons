import { useEffect, useRef, useState } from "react";
import styles from "./Guess.module.scss";
import NumberComp from "./NumberComp";
import Player from "./Player";
function Guess() {
  const initNum = (length) => {
    return new Array(length).fill(0).map(() => ({
      value: Math.floor(Math.random() * 9) + 1,
      player: null,
    }));
  };
  const [numObj, setnumObj] = useState(initNum(3));
  const [players, setPlayers] = useState([
    {
      id: 1,
      color: "#5b0d7a",
      points: 0,
    },
    {
      id: 2,
      color: "#291183",
      points: 0,
    },
  ]);

  const [errorState, setErrorState] = useState(false);
  const [allGuessedChars, setAllGuessedChars] = useState(new Set());
  const isFinished = !numObj.some((w) => w.player == null);
  const [playerToMoveId, setPlayerToMoveId] = useState(players[0].id);
  const getWinner = () => {
    if (!players.length) return null;
    return players.reduce((prevPl, pl) =>
      pl.points > prevPl.points ? pl : prevPl,
    );
  };
  const moveFn = (player, char) => {
    const foundChar = numObj.find((c) => c.value == char);
    if (!allGuessedChars.has(char)) {
      if (foundChar) {
        setnumObj((prev) =>
          prev.map((c) => (c.value == char ? { ...c, player: player.id } : c)),
        );
        addPoint(player.id);
      }
      setAllGuessedChars((prev) => new Set([...prev, char]));
      nextPlayer();
    } else {
      setErrorState(true);
    }
  };
  const addPoint = (playerId) => {
    setPlayers((prev) =>
      prev.map((pl) =>
        pl.id == playerId ? { ...pl, points: pl.points + 1 } : pl,
      ),
    );
  };
  const nextPlayer = () => {
    const currentIndex = players.findIndex((p) => p.id === playerToMoveId);
    const nextIndex = (currentIndex + 1) % players.length;
    setPlayerToMoveId(players[nextIndex].id);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (errorState) {
        setErrorState(false);
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorState]);

  return (
    <div className={styles.Guess}>
      <NumberComp
        numObj={numObj}
        players={players}
        allGuessedChars={allGuessedChars}
        errorState={errorState}
        winner={isFinished && getWinner()}
      />
      <div className={styles.Guess__Body}>
        {players.map((p) => (
          <Player
            key={p.id}
            moveFn={moveFn}
            player={p}
            allGuessedChars={allGuessedChars}
            setErrorState={setErrorState}
            isDisabled={isFinished || playerToMoveId !== p.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Guess;
