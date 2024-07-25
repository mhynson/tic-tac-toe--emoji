"use client";

import { useContext, useState } from "react";
import { GameContext, GameContextType } from "@/context/GameContext";
import GameStatus from "./ui/GameStatus";
import { getWinner, isBoardFilled } from "@/lib/utils";
import PlayerSelectors from "./ui/PlayerSelectors";
import Confetti from "react-confetti";

export function GameBoard() {
  const {
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
  } = useContext(GameContext) as GameContextType;

  const handleClick = (index: number) => {
    if (board[index] === "") {
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
    setBoard(emptyBoard);
    setCurrentPlayer(playerOne);
    setWinner("");
    setIsTie(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {/* Confetti for the Winner */}
      {!!winner && (
        <>
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
      <div className="grid grid-cols-3 gap-1 bg-primary">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`w-40 h-40 bg-secondary text-9xl transition-colors hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary ${
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
      <PlayerSelectors
        {...{
          currentPlayer,
          playerOne,
          playerTwo,
          setCurrentPlayer,
          setPlayerOne,
          setPlayerTwo,
        }}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
