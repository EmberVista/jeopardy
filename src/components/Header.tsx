import React from 'react';
import { Award, HelpCircle } from 'lucide-react';
import { useGameContext } from '../context/GameContext';

const Header: React.FC = () => {
  const { gameMode, setGameMode } = useGameContext();

  return (
    <header className="bg-blue-800 shadow-lg py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Award className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl font-bold text-white">5th Grade Math Jeopardy</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className={`px-4 py-2 rounded-md transition-all ${
              gameMode === 'jeopardy' 
                ? 'bg-yellow-500 text-blue-900 font-bold' 
                : 'bg-blue-700 text-white hover:bg-blue-600'
            }`}
            onClick={() => setGameMode('jeopardy')}
          >
            Jeopardy
          </button>
          
          <button 
            className={`px-4 py-2 rounded-md transition-all ${
              gameMode === 'doubleJeopardy' 
                ? 'bg-yellow-500 text-blue-900 font-bold' 
                : 'bg-blue-700 text-white hover:bg-blue-600'
            }`}
            onClick={() => setGameMode('doubleJeopardy')}
          >
            Double Jeopardy
          </button>
          
          <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-all">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;