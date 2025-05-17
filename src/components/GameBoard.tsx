import React from 'react';
import { useGameContext } from '../context/GameContext';
import { categoriesData } from '../data/categories';
import { ArrowLeftCircle } from 'lucide-react';
import QuestionCard from './QuestionCard';

const GameBoard: React.FC = () => {
  const { 
    gameMode, 
    currentQuestion, 
    setCurrentQuestion, 
    answeredQuestions, 
    markQuestionAsAnswered, 
    updateScore,
    currentPlayer
  } = useGameContext();
  
  const multiplier = gameMode === 'jeopardy' ? 1 : 2;
  const categories = categoriesData.slice(0, 6); // Always show 6 categories for consistent layout
  
  const handleQuestionClick = (category: string, value: number, questionId: string) => {
    const categoryData = categoriesData.find(cat => cat.title === category);
    if (categoryData) {
      const question = categoryData.questions.find(q => q.id === questionId);
      if (question) {
        setCurrentQuestion(question);
      }
    }
  };
  
  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (currentQuestion) {
      markQuestionAsAnswered(currentQuestion.id);
      
      // Update score based on answer
      const points = currentQuestion.value * multiplier;
      if (isCorrect) {
        updateScore(currentPlayer, points);
      } else {
        updateScore(currentPlayer, -points);
      }
      
      setCurrentQuestion(null);
    }
  };
  
  if (currentQuestion) {
    return (
      <QuestionCard 
        question={currentQuestion} 
        pointMultiplier={multiplier}
        onClose={() => setCurrentQuestion(null)}
        onAnswer={handleAnswerSubmit}
      />
    );
  }
  
  return (
    <div className="flex-1 flex flex-col">
      <div className="grid grid-cols-6 gap-4 mb-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-blue-800 p-3 rounded-md text-center h-24 flex items-center justify-center"
          >
            <h3 className="font-bold text-sm sm:text-base md:text-lg text-yellow-300">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-6 gap-4 flex-1">
        {[100, 200, 300, 400, 500].map((value) => (
          <React.Fragment key={value}>
            {categories.map((category) => {
              const pointValue = value * multiplier;
              const questions = category.questions.filter(q => q.value === value);
              const questionId = questions.length > 0 ? questions[0].id : '';
              const isAnswered = answeredQuestions.includes(questionId);
              
              return (
                <button
                  key={`${category.id}-${value}`}
                  className={`
                    ${isAnswered ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 cursor-pointer'}
                    rounded-md flex items-center justify-center transition-all
                    shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0
                    text-2xl font-bold p-4 relative
                  `}
                  onClick={() => !isAnswered && handleQuestionClick(category.title, pointValue, questionId)}
                  disabled={isAnswered}
                >
                  {isAnswered ? (
                    <span className="opacity-50">-</span>
                  ) : (
                    <>
                      <span className="text-yellow-400">${pointValue}</span>
                      {/* 10% chance of being a daily double */}
                      {Math.random() < 0.1 && value >= 300 && (
                        <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;