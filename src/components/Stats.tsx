import { getStats } from '../utils/storage';
import { FACTS } from '../data/facts';
import './Stats.css';

interface StatsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Stats({ isOpen, onClose }: StatsProps) {
  if (!isOpen) return null;

  const stats = getStats();
  const favoriteFacts = FACTS.filter(f => stats.favoriteFacts.includes(f.id));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content stats-modal" onClick={(e) => e.stopPropagation()}>
        <div className="stats-header">
          <h2>📊 Your Stats</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="stats-body">
          <div className="stat-card">
            <div className="stat-value">{stats.factsRead}</div>
            <div className="stat-label">Facts Learned</div>
          </div>

          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <div className="stat-number">{stats.currentStreak}</div>
                <div className="stat-text">Current Streak</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <div className="stat-number">{stats.maxStreak}</div>
                <div className="stat-text">Best Streak</div>
              </div>
            </div>
          </div>

          {favoriteFacts.length > 0 && (
            <div className="favorites-section">
              <h3>❤️ Favorite Facts ({favoriteFacts.length})</h3>
              <div className="favorites-list">
                {favoriteFacts.map(fact => (
                  <div key={fact.id} className="favorite-item">
                    <span className="favorite-emoji">
                      {fact.category === 'Science' && '🔬'}
                      {fact.category === 'Technology' && '💻'}
                      {fact.category === 'Human Body' && '🧠'}
                      {fact.category === 'History' && '📜'}
                      {fact.category === 'Animals' && '🐾'}
                      {fact.category === 'Space' && '🚀'}
                      {fact.category === 'Nature' && '🌿'}
                      {fact.category === 'Food' && '🍔'}
                      {fact.category === 'Physics' && '⚛️'}
                      {fact.category === 'Earth' && '🌍'}
                    </span>
                    <span className="favorite-text">{fact.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stats.factsRead === 0 && (
            <div className="empty-stats">
              <p>👋 Start your learning journey!</p>
              <p className="empty-subtext">Come back daily to discover fascinating facts</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
