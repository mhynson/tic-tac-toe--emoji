"use client";

import EmojiPicker from "emoji-picker-react";

interface IPlayerSelectorProps {
  label: string;
  isPickerOpen: boolean;
  player: string;
  setPlayer: (player: string) => void;
  setIsPickerOpen: (open: boolean) => void;
}

export const PlayerSelector: React.FC<IPlayerSelectorProps> = (props) => {
  const { label, isPickerOpen, player, setPlayer, setIsPickerOpen } = props;
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <EmojiPicker
        open={isPickerOpen}
        style={{ position: "absolute", left: "50%", bottom: 0 }}
        onEmojiClick={(evt) => {
          setPlayer(evt.emoji);
          setIsPickerOpen(false);
        }}
        onReactionClick={(evt) => {
          setPlayer(evt.emoji);
          setIsPickerOpen(false);
        }}
      />
      <button onClick={() => setIsPickerOpen(!isPickerOpen)}>{player}</button>
    </div>
  );
};
