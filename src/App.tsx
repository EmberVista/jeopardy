import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import GameSettings from './components/GameSettings';
import ScoreBoard from './components/ScoreBoard';
import { GameProvider } from './context/GameContext';
import Header from './components/Header';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8 flex flex-col">
          {!gameStarted ? (
            <GameSettings onStartGame={() => setGameStarted(true)} />
          ) : (
            <div className="flex flex-col space-y-4 flex-1">
              <ScoreBoard />
              <GameBoard />
            </div>
          )}
        </main>
        
        <footer className="text-center py-4 text-blue-300 text-sm">
          <p>5th Grade Math Jeopardy Game &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </GameProvider>
  );
}

export default App;