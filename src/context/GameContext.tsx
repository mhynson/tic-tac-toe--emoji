"use client";

import { createContext, ReactNode, useState } from "react";

export type GameContextType = {
  playerOne: string;
  playerTwo: string;
  setPlayerOne: (player: string) => void;
  setPlayerTwo: (player: string) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

const GameContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [playerOne, setPlayerOne] = useState("❌");
  const [playerTwo, setPlayerTwo] = useState("⭕️");
  return (
    <GameContext.Provider
      value={{ playerOne, playerTwo, setPlayerOne, setPlayerTwo }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContextProvider };
