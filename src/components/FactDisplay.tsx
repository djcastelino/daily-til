import type { Fact } from '../types';
import './FactDisplay.css';

interface FactDisplayProps {
  fact: Fact;
  onReadComplete: () => void;
  hasRead: boolean;
}

export default function FactDisplay({ fact, onReadComplete, hasRead }: FactDisplayProps) {
  const handleLearnWhy = () => {
    if (!hasRead) {
      onReadComplete();
    }
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
          </div>

          <button className="learn-button btn-primary" onClick={handleLearnWhy}>
            👆 Tap to Learn Why
          </button>
        </div>
      </div>
    );
  }

  // Full explanation view - show both simple and detailed
  return (
    <div className="fact-display">
      <div className="fact-card">
        <h2 className="fact-title-small">{fact.fact}</h2>
        
        <div className="explanation-content">
          <p>{fact.explanationSimple}</p>
          <p>{fact.explanationDetailed}</p>
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
      </div>
    </div>
  );
}
