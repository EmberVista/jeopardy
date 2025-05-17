import React, { useState } from 'react';
import { PlusCircle, Play, Trash2 } from 'lucide-react';
import { useGameContext } from '../context/GameContext';

interface GameSettingsProps {
  onStartGame: () => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({ onStartGame }) => {
  const { players, addPlayer, removePlayer, resetGame } = useGameContext();
  const [newPlayerName, setNewPlayerName] = useState('');
  
  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim()) {
      addPlayer(newPlayerName.trim());
      setNewPlayerName('');
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto w-full bg-blue-800 rounded-lg p-6 shadow-lg animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">Game Setup</h2>
        <p className="text-blue-200">Configure your 5th Grade Math Jeopardy game</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 inline-flex items-center justify-center bg-yellow-500 text-blue-900 rounded-full mr-2">1</span>
          Add Players
        </h3>
        
        <div className="space-y-4">
          <form onSubmit={handleAddPlayer} className="flex">
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Enter player name"
              className="flex-1 px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-yellow-400 bg-blue-900 text-white"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors flex items-center"
            >
              <PlusCircle className="w-5 h-5 mr-1" />
              Add
            </button>
          </form>
          
          <div className="bg-blue-900 rounded-md p-4">
            <h4 className="font-bold mb-2 text-blue-300">Current Players:</h4>
            {players.length === 0 ? (
              <p className="text-blue-400 italic">No players added yet</p>
            ) : (
              <ul className="space-y-2">
                {players.map((player) => (
                  <li 
                    key={player.id}
                    className="bg-blue-800 rounded-md px-4 py-2 flex justify-between items-center"
                  >
                    <span>{player.name}</span>
                    <button 
                      onClick={() => removePlayer(player.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 inline-flex items-center justify-center bg-yellow-500 text-blue-900 rounded-full mr-2">2</span>
          Game Rules
        </h3>
        
        <div className="bg-blue-900 rounded-md p-4 space-y-3 text-blue-200">
          <p>• The game has 2 rounds: Jeopardy and Double Jeopardy</p>
          <p>• Start with the Jeopardy round and then proceed to Double Jeopardy</p>
          <p>• In Double Jeopardy, all point values are doubled</p>
          <p>• Choose a player's turn before selecting a question</p>
          <p>• Players gain points for correct answers and lose points for incorrect answers</p>
          <p>• The player with the highest score at the end wins!</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Reset Game
        </button>
        
        <button
          onClick={onStartGame}
          disabled={players.length === 0}
          className={`
            px-6 py-3 rounded-md font-bold flex items-center transition-colors
            ${players.length === 0 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'}
          `}
        >
          <Play className="w-5 h-5 mr-2" />
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameSettings;