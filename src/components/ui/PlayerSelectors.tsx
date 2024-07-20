import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { GameContext, GameContextType } from "@/context/GameContext";
import EmojiPicker from "emoji-picker-react";
interface PlayerSelectorsProps {}

const PlayerSelectors: React.FC<PlayerSelectorsProps> = () => {
  const { playerOne, playerTwo, setPlayerOne, setPlayerTwo } = useContext(
    GameContext
  ) as GameContextType;

  const [pickerOneOpen, updatePickerOneOpen] = useState(false);

  const handlePlayerOneChange = (e) => {
    setPlayerOne(e.target.value);
  };

  const handlePlayerTwoChange = (e) => {
    setPlayerTwo(e.target.value);
  };

  return (
    <div className="mt-4 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label
          htmlFor="playerOne"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Player One:
        </label>
        <Input
          id="playerOne"
          value={playerOne}
          onChange={handlePlayerOneChange}
          maxLength={1}
          className="w-12 text-center"
        />
        <EmojiPicker open={pickerOneOpen} />
        <button onClick={() => updatePickerOneOpen(true)}>🙂+</button>
      </div>
      <div className="flex items-center gap-2">
        <label
          htmlFor="playerTwo"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Player Two:
        </label>
        <Input
          id="playerTwo"
          value={playerTwo}
          onChange={handlePlayerTwoChange}
          maxLength={1}
          className="w-12 text-center"
        />
      </div>
    </div>
  );
};

export default PlayerSelectors;
