import { useState } from "react";
import { produce } from "immer";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    // game.player.name = "Bob";

    // using vanilla React
    //setGame({ ...game, player: { ...game.player, name: "Bob" } });

    // using immer
    setGame(
      produce((draft) => {
        draft.player.name = "Bob";
      })
    );
  };

  return (
    <>
      <p key={game.player.name}>Player name: {game.player.name}</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
