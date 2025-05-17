import React, { useState } from 'react';
import { ArrowLeftCircle, Check, X } from 'lucide-react';
import { QuestionsType } from '../data/categories';

interface QuestionCardProps {
  question: QuestionsType;
  pointMultiplier: number;
  onClose: () => void;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  pointMultiplier, 
  onClose, 
  onAnswer 
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState<boolean | null>(null);
  
  const handleAnswer = (isCorrect: boolean) => {
    if (!showAnswer) {
      return; // Prevent answering before revealing the answer
    }
    setAnswered(true);
    setAnswerCorrect(isCorrect);
    onAnswer(isCorrect);
  };

  const handleReveal = () => {
    setShowAnswer(true);
    if (isMultipleChoice) {
      const isCorrect =
        selectedAnswer?.toLowerCase() === question.answer.toLowerCase();
      handleAnswer(!!isCorrect);
    }
  };

  const handleContinue = () => {
    onClose();
  };
  
  const isMultipleChoice = question.choices && question.choices.length > 0;
  
  return (
    <div className="flex-1 bg-blue-800 rounded-lg shadow-xl p-6 flex flex-col relative animate-fadeIn">
      <button 
        onClick={onClose}
        className="absolute top-4 left-4 text-blue-300 hover:text-white"
      >
        <ArrowLeftCircle className="w-6 h-6" />
      </button>
      
      <div className="text-center mb-8 mt-4">
        <div className="text-yellow-400 font-bold mb-2">
          ${question.value * pointMultiplier}
        </div>
        <h2 className="text-2xl font-bold text-white">{question.category}</h2>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-blue-900 p-6 rounded-lg w-full max-w-3xl mx-auto shadow-inner">
          <p className="text-xl text-center mb-8">{question.question}</p>
          
          {isMultipleChoice && !answered && (
            <div className="grid grid-cols-2 gap-4 mt-8">
              {question.choices?.map((choice, index) => (
                <button 
                  key={index}
                  className={`
                    p-4 rounded-md text-lg font-medium transition-all
                    ${selectedAnswer === choice 
                      ? 'bg-yellow-500 text-blue-900' 
                      : 'bg-blue-800 text-white hover:bg-blue-700'}
                  `}
                  onClick={() => setSelectedAnswer(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          )}
          
          {!answered && (
            <div className="mt-8 text-center">
              {!showAnswer ? (
                <button
                  className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all"
                  onClick={handleReveal}
                >
                  Reveal Answer
                </button>
              ) : (
                <div className="animate-fadeIn">
                  <p className="text-lg font-bold mb-4">Answer:</p>
                  <p className="text-xl text-yellow-300">{question.answer}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showAnswer && !answered && !isMultipleChoice && (
        <div className="mt-8 flex justify-center space-x-6">
          <button
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-bold"
            onClick={() => handleAnswer(true)}
          >
            <Check className="w-5 h-5" />
            <span>Correct</span>
          </button>

          <button
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md font-bold"
            onClick={() => handleAnswer(false)}
          >
            <X className="w-5 h-5" />
            <span>Incorrect</span>
          </button>
        </div>
      )}

      {answered && (
        <div className="mt-8 text-center">
codex/locate-and-fix-bug-mz8ygo
          <div className={`text-2xl font-bold ${answerCorrect ? 'text-green-400' : 'text-red-400'}`}>

          <div className={`text-2xl font-bold ${answerCorrect ? 'text-green-400' : 'text-red-400'}`}> 

            {answerCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
          <button
            className="mt-4 bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all"
            onClick={handleContinue}
          >
            Continue Game
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;