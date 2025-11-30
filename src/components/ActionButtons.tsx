import type { Fact, GameState } from '../types';
import { generateShareText, toggleFavorite } from '../utils/storage';
import './ActionButtons.css';

interface ActionButtonsProps {
  fact: Fact;
  gameState: GameState;
  onToggleFavorite: (newState: GameState) => void;
  onStatsClick: () => void;
  onArchiveClick: () => void;
}

export default function ActionButtons({ 
  fact, 
  gameState,
  onToggleFavorite, 
  onStatsClick,
  onArchiveClick
}: ActionButtonsProps) {
  const isFavorite = gameState.favoriteFacts.includes(fact.id);

  const handleShare = () => {
    const shareText = generateShareText(fact);
    
    if (navigator.share) {
      navigator.share({
        text: shareText
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        alert('Copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

  const handleToggleFavorite = () => {
    const newState = toggleFavorite(gameState, fact.id);
    onToggleFavorite(newState);
  };

  return (
    <div className="action-buttons">
      <button className="action-button share-button btn-primary" onClick={handleShare}>
        📤 Share This Fact
      </button>
      
      <div className="secondary-actions">
        <button 
          className={`action-button favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'} {isFavorite ? 'Saved' : 'Save'}
        </button>
        
        <button className="action-button stats-button" onClick={onStatsClick}>
          📊 Stats
        </button>
        
        <button className="action-button archive-button" onClick={onArchiveClick}>
          📚 Archive
        </button>
      </div>
    </div>
  );
}

