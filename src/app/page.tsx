"use client";

import { GameBoard } from "@/components/GameBoard";
import { GameContextProvider } from "../context/GameContext";

export default function Home() {
  return (
    <GameContextProvider>
      <GameBoard />
    </GameContextProvider>
  );
}
