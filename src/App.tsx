import { useState, useEffect } from 'react';
import type { GameState, Fact } from './types';
import { getDailyFact } from './data/facts';
import { loadGameState, saveGameState, isNewDay, updateStats, saveArchiveFact } from './utils/storage';
import Header from './components/Header';
import FactDisplay from './components/FactDisplay';
import ActionButtons from './components/ActionButtons';
import Stats from './components/Stats';
import Archive from './components/Archive';
import './App.css';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    targetFact: null,
    hasRead: false,
    currentStreak: 0,
    maxStreak: 0,
    factsRead: 0,
    lastReadDate: '',
    favoriteFacts: []
  });
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveMode, setArchiveMode] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  function initGame(archiveFact?: Fact) {
    try {
      const savedState = loadGameState();

      if (archiveFact) {
        // Archive mode - viewing a past fact
        setGameState({
          ...savedState || {
            currentStreak: 0,
            maxStreak: 0,
            factsRead: 0,
            lastReadDate: '',
            favoriteFacts: []
          },
          targetFact: archiveFact,
          hasRead: false // Start collapsed
        });
        setArchiveMode(true);
        setLoading(false);
        return;
      }

      const shouldStartNewDay = !savedState || 
                                !savedState.targetFact || 
                                !savedState.lastReadDate ||
                                isNewDay(savedState.lastReadDate);

      if (shouldStartNewDay) {
        const dailyFact = getDailyFact();
        const newState: GameState = {
          targetFact: dailyFact,
          hasRead: false,
          currentStreak: savedState?.currentStreak || 0,
          maxStreak: savedState?.maxStreak || 0,
          factsRead: savedState?.factsRead || 0,
          lastReadDate: savedState?.lastReadDate || '',
          favoriteFacts: savedState?.favoriteFacts || []
        };
        setGameState(newState);
        saveGameState(newState);
      } else {
        setGameState(savedState);
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Failed to initialize game:", error);
      setLoading(false);
    }
  }

  const handleReadComplete = () => {
    if (!gameState.targetFact) return;

    const updatedState = updateStats(gameState, !archiveMode);
    const newState = {
      ...updatedState,
      hasRead: true
    };

    setGameState(newState);
    
    if (!archiveMode) {
      saveGameState(newState);
    } else {
      saveArchiveFact(gameState.targetFact.id, true);
    }
  };

  const handleToggleFavorite = (newState: GameState) => {
    setGameState(newState);
    if (!archiveMode) {
      saveGameState(newState);
    }
  };

  const handleSelectArchiveFact = (fact: Fact) => {
    initGame(fact);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Daily TIL...</p>
      </div>
    );
  }

  if (!gameState.targetFact) {
    return (
      <div className="error-screen">
        <p>Failed to load fact. Please refresh the page.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {archiveMode && (
          <div className="archive-banner">
            📚 Archive Mode
            <button 
              onClick={() => {
                setArchiveMode(false);
                initGame();
              }}
              className="back-to-today-btn"
            >
              ← Back to Today
            </button>
          </div>
        )}

        <FactDisplay 
          fact={gameState.targetFact}
          onReadComplete={handleReadComplete}
          hasRead={gameState.hasRead}
        />

        {gameState.hasRead && (
          <ActionButtons
            fact={gameState.targetFact}
            gameState={gameState}
            onToggleFavorite={handleToggleFavorite}
            onStatsClick={() => setShowStats(true)}
            onArchiveClick={() => setShowArchive(true)}
          />
        )}
      </main>

      <Stats 
        isOpen={showStats}
        onClose={() => setShowStats(false)}
      />

      <Archive
        isOpen={showArchive}
        onClose={() => setShowArchive(false)}
        onSelectFact={handleSelectArchiveFact}
      />
    </div>
  );
}

export default App;
