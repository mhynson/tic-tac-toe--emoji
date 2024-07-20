"use client";

import { useContext, useState } from "react";
import { GameContext, GameContextType } from "@/context/GameContext";
import GameStatus from "./ui/GameStatus";
import { getWinner, isBoardFilled } from "@/lib/utils";
import PlayerSelectors from "./ui/PlayerSelectors";
import Confetti from "react-confetti";
import Fireworks from "@fireworks-js/react";

export function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const { playerOne, playerTwo } = useContext(GameContext) as GameContextType;
  const [winner, setWinner] = useState("");
  const [isTie, setIsTie] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  const handleClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const theWinner = getWinner(newBoard);
      setWinner(theWinner);
      setIsTie(!theWinner && isBoardFilled(newBoard));

      if (!winner) {
        setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne);
      }
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(playerOne);
    setWinner("");
    setIsTie(false);
  };

  // winner = getWinner(board);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {/* Confetti for the Winner */}
      {!!winner && (
        <>
          <Fireworks />
          <Confetti
            numberOfPieces={2000}
            recycle={false}
            tweenDuration={15000}
          />
        </>
      )}
      {/* Rain for Ties */}
      {isTie && (
        <Confetti
          wind={0.01}
          numberOfPieces={5000}
          colors={["#3333ff33"]}
          tweenDuration={10000}
        />
      )}

      <h1 className="text-3xl font-bold mb-8">Tic Tac Emoji</h1>
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`w-40 h-40 bg-card text-9xl text-card-foreground rounded-md transition-colors hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary ${
              cell !== null && !!winner ? "cursor-pointer hover:bg-accent" : ""
            } ${cell === null ? "animate-fade-in" : ""}`}
            disabled={!!winner}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <GameStatus {...{ currentPlayer, isTie, winner }} />
      {/* <PlayerSelectors /> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
