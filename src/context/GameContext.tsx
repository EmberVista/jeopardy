import React, { createContext, useContext, useState, ReactNode } from 'react';
import { categoriesData, QuestionsType } from '../data/categories';

export type Player = {
  id: number;
  name: string;
  score: number;
};

type GameContextType = {
  gameMode: 'jeopardy' | 'doubleJeopardy';
  setGameMode: (mode: 'jeopardy' | 'doubleJeopardy') => void;
  currentQuestion: QuestionsType | null;
  setCurrentQuestion: (question: QuestionsType | null) => void;
  answeredQuestions: string[];
  markQuestionAsAnswered: (questionId: string) => void;
  players: Player[];
  addPlayer: (name: string) => void;
  removePlayer: (id: number) => void;
  updateScore: (playerId: number, points: number) => void;
  currentPlayer: number | null;
  setCurrentPlayer: (playerId: number | null) => void;
  resetGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameMode, setGameMode] = useState<'jeopardy' | 'doubleJeopardy'>('jeopardy');
  const [currentQuestion, setCurrentQuestion] = useState<QuestionsType | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number | null>(null);

  const markQuestionAsAnswered = (questionId: string) => {
    setAnsweredQuestions([...answeredQuestions, questionId]);
  };

  const addPlayer = (name: string) => {
    const newPlayer = {
      id: Date.now(), // Use timestamp for unique IDs
      name,
      score: 0
    };
    setPlayers([...players, newPlayer]);
    
    // If this is the first player, set them as current
    if (players.length === 0) {
      setCurrentPlayer(newPlayer.id);
    }
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter(player => player.id !== id));
    if (currentPlayer === id) {
      setCurrentPlayer(players[0]?.id || null);
    }
  };

  const updateScore = (playerId: number, points: number) => {
    setPlayers(
      players.map((player) =>
        player.id === playerId
          ? { ...player, score: player.score + points }
          : player
      )
    );
  };

  const resetGame = () => {
    setGameMode('jeopardy');
    setCurrentQuestion(null);
    setAnsweredQuestions([]);
    setPlayers([]);
    setCurrentPlayer(null);
  };

  return (
    <GameContext.Provider
      value={{
        gameMode,
        setGameMode,
        currentQuestion,
        setCurrentQuestion,
        answeredQuestions,
        markQuestionAsAnswered,
        players,
        addPlayer,
        removePlayer,
        updateScore,
        currentPlayer,
        setCurrentPlayer,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};