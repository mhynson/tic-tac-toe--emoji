import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getWinningLines = () => {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
};

export const isBoardFilled = (board: string[]) =>
  board.every((cell) => cell !== "");

export const getWinner = (board: string[]) => {
  if (board.length !== 9 || board.join("").length < 5) return "";

  let winner = null;
  getWinningLines().forEach(([a, b, c]) => {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  });

  if (winner) return winner;

  return "";
};
