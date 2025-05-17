import React from 'react';
import { useGameContext } from '../context/GameContext';
import { Users } from 'lucide-react';

const ScoreBoard: React.FC = () => {
  const { players, currentPlayer, setCurrentPlayer } = useGameContext();
  
  return (
    <div className="bg-blue-800 rounded-lg p-4 shadow-md">
      <div className="flex items-center mb-3">
        <Users className="w-5 h-5 text-blue-300 mr-2" />
        <h2 className="text-lg font-bold">Players</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {players.map((player) => (
          <button
            key={player.id}
            className={`
              px-4 py-3 rounded-md text-center transition-all
              ${player.id === currentPlayer 
                ? 'bg-yellow-500 text-blue-900 ring-2 ring-white' 
                : 'bg-blue-700 text-white hover:bg-blue-600'}
            `}
            onClick={() => setCurrentPlayer(player.id)}
          >
            <div className="font-bold">{player.name}</div>
            <div className={`text-xl font-bold ${player.score < 0 ? 'text-red-400' : 'text-green-300'}`}>
              ${player.score}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;