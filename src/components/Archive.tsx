import { getYesterdaysFact, loadArchiveFact } from '../utils/storage';
import type { Fact } from '../types';
import './Archive.css';

interface ArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFact: (fact: Fact) => void;
}

export default function Archive({ isOpen, onClose, onSelectFact }: ArchiveProps) {
  if (!isOpen) return null;

  const yesterdayFact = getYesterdaysFact();
  const yesterdayState = loadArchiveFact(yesterdayFact.id);

  const handleSelectYesterday = () => {
    onSelectFact(yesterdayFact);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content archive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="archive-header">
          <h2>📚 Previous Facts</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="archive-body">
          <div className="archive-info">
            💡 Missed yesterday? Catch up now!
            <br />
            <span className="archive-note">(Doesn't affect your streak)</span>
          </div>

          <div className="archive-item yesterday" onClick={handleSelectYesterday}>
            <div className="archive-label">⏮️ YESTERDAY</div>
            <div className="archive-fact-title">
              {yesterdayState?.hasRead ? yesterdayFact.fact : '🔒 Mystery Fact'}
            </div>
            <div className="archive-meta">
              <span className="archive-category">{yesterdayFact.category}</span>
              <span className={`archive-difficulty ${yesterdayFact.difficulty}`}>
                {yesterdayFact.difficulty.charAt(0).toUpperCase() + yesterdayFact.difficulty.slice(1)}
              </span>
            </div>
            {yesterdayState?.hasRead && (
              <div className="archive-status">✓ Read</div>
            )}
          </div>

          <div className="premium-section">
            <div className="premium-lock">🔒</div>
            <h3>OLDER FACTS (Premium)</h3>
            <p>Want access to all {14} facts?</p>
            <p className="premium-price">Unlock Archive for $1.99/month</p>
            <button className="premium-button btn-primary">
              🔓 Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
