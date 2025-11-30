import type { Fact } from '../types';
import { generateShareText } from '../utils/storage';
import './ActionButtons.css';

interface ActionButtonsProps {
  fact: Fact;
  onArchiveClick: () => void;
}

export default function ActionButtons({ 
  fact,
  onArchiveClick
}: ActionButtonsProps) {
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

  return (
    <div className="action-buttons">
      <button className="action-button share-button btn-primary" onClick={handleShare}>
        📤 Share This Fact
      </button>
      <button className="action-button archive-button" onClick={onArchiveClick}>
        📚 Archive
      </button>
    </div>
  );
}

