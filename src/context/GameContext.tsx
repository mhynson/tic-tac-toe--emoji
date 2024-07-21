"use client";

import { createContext, ReactNode, useState } from "react";

export type GameContextType = {
  board: string[];
  currentPlayer: string;
  emptyBoard: string[];
  isTie: boolean;
  playerOne: string;
  playerTwo: string;
  setBoard: (board: string[]) => void;
  setCurrentPlayer: (player: string) => void;
  setIsTie: (tie: boolean) => void;
  setPlayerOne: (player: string) => void;
  setPlayerTwo: (player: string) => void;
  setWinner: (winner: string) => void;
  winner: string;
};

export const GameContext = createContext<GameContextType | null>(null);

const GameContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const emptyBoard = Array(9).fill("");
  const [playerOne, setPlayerOne] = useState("❌");
  const [playerTwo, setPlayerTwo] = useState("⭕️");
  const [board, setBoard] = useState(emptyBoard);
  const [isTie, setIsTie] = useState(false);
  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  const context = {
    board,
    currentPlayer,
    emptyBoard,
    isTie,
    playerOne,
    playerTwo,
    setBoard,
    setCurrentPlayer,
    setIsTie,
    setPlayerOne,
    setPlayerTwo,
    setWinner,
    winner,
  };
  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};

export { GameContextProvider };
