import { useState } from "react";
import { PlayerSelector } from "./PlayerSelector";
interface PlayerSelectorsProps {
  currentPlayer: string;
  playerOne: string;
  playerTwo: string;
  setCurrentPlayer: (player: string) => void;
  setPlayerOne: (player: string) => void;
  setPlayerTwo: (player: string) => void;
}

const PlayerSelectors: React.FC<PlayerSelectorsProps> = (props) => {
  const {
    currentPlayer,
    playerOne,
    playerTwo,
    setCurrentPlayer,
    setPlayerOne,
    setPlayerTwo,
  } = props;

  const [pickerOneOpen, updatePickerOneOpen] = useState(false);
  const [pickerTwoOpen, updatePickerTwoOpen] = useState(false);

  return (
    <div className="mt-4 flex items-center gap-4">
      <PlayerSelector
        label="Player One"
        isPickerOpen={pickerOneOpen}
        setIsPickerOpen={updatePickerOneOpen}
        player={playerOne}
        setPlayer={(player) => {
          if (currentPlayer === playerOne) {
            setCurrentPlayer(player);
          }
          setPlayerOne(player);
        }}
      />
      <PlayerSelector
        label="Player Two"
        isPickerOpen={pickerTwoOpen}
        setIsPickerOpen={updatePickerTwoOpen}
        player={playerTwo}
        setPlayer={(player) => {
          if (currentPlayer === playerTwo) {
            setCurrentPlayer(player);
          }
          setPlayerTwo(player);
        }}
      />
    </div>
  );
};

export default PlayerSelectors;
