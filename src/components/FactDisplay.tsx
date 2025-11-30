import { useState } from 'react';
import type { Fact } from '../types';
import './FactDisplay.css';

interface FactDisplayProps {
  fact: Fact;
  onReadComplete: () => void;
  hasRead: boolean;
}

export default function FactDisplay({ fact, onReadComplete, hasRead }: FactDisplayProps) {
  const [showDetailed, setShowDetailed] = useState(false);
  const [showScientific, setShowScientific] = useState(false);

  const handleLearnWhy = () => {
    if (!hasRead) {
      onReadComplete();
    }
  };

  const difficultyEmoji = {
    easy: '⭐',
    medium: '⭐⭐',
    hard: '⭐⭐⭐'
  };

  if (!hasRead) {
    // Initial view - show fact teaser
    return (
      <div className="fact-display">
        <div className="fact-card">
          <p className="date-label">📅 Today's Fact</p>
          
          <h2 className="fact-title">{fact.fact}</h2>
          
          <div className="fact-meta">
            <span className="category">{fact.category}</span>
            <span className={`difficulty ${fact.difficulty}`}>
              {difficultyEmoji[fact.difficulty]} {fact.difficulty.charAt(0).toUpperCase() + fact.difficulty.slice(1)}
            </span>
          </div>

          <button className="learn-button btn-primary" onClick={handleLearnWhy}>
            👆 Tap to Learn Why
          </button>
        </div>
      </div>
    );
  }

  // Explanation view - show progressive reveals
  return (
    <div className="fact-display">
      <div className="fact-card">
        <h2 className="fact-title-small">{fact.fact}</h2>
        
        <div className="explanation-section">
          <div className="explanation-header">
            <span className="age-badge">👶 SIMPLE (Age 5-8)</span>
          </div>
          <div className="explanation-content">
            {fact.explanationSimple}
          </div>
        </div>

        {!showDetailed && (
          <button 
            className="expand-button" 
            onClick={() => setShowDetailed(true)}
          >
            ▼ Read More (Age 10-12)
          </button>
        )}

        {showDetailed && (
          <>
            <div className="explanation-section">
              <div className="explanation-header">
                <span className="age-badge">🧒 DETAILED (Age 10-12)</span>
              </div>
              <div className="explanation-content">
                {fact.explanationDetailed}
              </div>
            </div>

            {!showScientific && (
              <button 
                className="expand-button" 
                onClick={() => setShowScientific(true)}
              >
                ▼ Go Scientific (Age 13+)
              </button>
            )}
          </>
        )}

        {showScientific && (
          <>
            <div className="explanation-section">
              <div className="explanation-header">
                <span className="age-badge">🎓 SCIENTIFIC (Age 13+)</span>
              </div>
              <div className="explanation-content scientific">
                {fact.explanationScientific}
              </div>
            </div>

            <div className="fun-fact-section">
              <div className="fun-fact-header">
                💡 BONUS FUN FACT
              </div>
              <div className="fun-fact-content">
                {fact.funFact}
              </div>
              <div className="fun-fact-source">
                Source:{' '}
                <a 
                  href={fact.funFactSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {fact.funFactSource}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

