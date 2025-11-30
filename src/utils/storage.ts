import type { GameState, Fact, Stats } from '../types';
import { getDailyFact } from '../data/facts';

const STORAGE_KEY = 'dailytil-game-state';

// Check if it's a new day
export function isNewDay(lastDate: string): boolean {
  const today = new Date().toISOString().split('T')[0];
  return today !== lastDate;
}

// Load game state from localStorage
export function loadGameState(): GameState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

// Save game state to localStorage
export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

// Get stats for display
export function getStats(): Stats {
  const state = loadGameState();
  if (!state) {
    return {
      factsRead: 0,
      currentStreak: 0,
      maxStreak: 0,
      favoriteFacts: []
    };
  }
  return {
    factsRead: state.factsRead,
    currentStreak: state.currentStreak,
    maxStreak: state.maxStreak,
    favoriteFacts: state.favoriteFacts
  };
}

// Update stats after reading a fact
export function updateStats(gameState: GameState, isToday: boolean): GameState {
  const todayDateOnly = new Date().toISOString().split('T')[0];
  
  if (!isToday) {
    // Archive reading doesn't affect streak
    return gameState;
  }

  let newStreak = gameState.currentStreak;
  
  // If last read was yesterday, increment streak
  if (gameState.lastReadDate) {
    const lastDate = new Date(gameState.lastReadDate);
    const today = new Date(todayDateOnly);
    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      newStreak += 1;
    } else if (diffDays > 1) {
      newStreak = 1; // Streak broken
    }
  } else {
    newStreak = 1; // First read
  }
  
  return {
    ...gameState,
    hasRead: true,
    factsRead: gameState.factsRead + 1,
    currentStreak: newStreak,
    maxStreak: Math.max(newStreak, gameState.maxStreak),
    lastReadDate: todayDateOnly
  };
}

// Toggle favorite fact
export function toggleFavorite(state: GameState, factId: number): GameState {
  const isFavorite = state.favoriteFacts.includes(factId);
  
  return {
    ...state,
    favoriteFacts: isFavorite
      ? state.favoriteFacts.filter(id => id !== factId)
      : [...state.favoriteFacts, factId]
  };
}

// Generate share text
export function generateShareText(fact: Fact): string {
  return `💡 Today I Learned:

"${fact.fact}"

Learn why at dailytil.com 🧠

#TodayILearned #DailyTIL #${fact.category}`;
}

// Get yesterday's fact
export function getYesterdaysFact(): Fact {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDailyFact(yesterday);
}

// Archive state for previous facts
const ARCHIVE_KEY_PREFIX = 'dailytil-archive-';

export function loadArchiveFact(factId: number): { hasRead: boolean } | null {
  try {
    const stored = localStorage.getItem(ARCHIVE_KEY_PREFIX + factId);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveArchiveFact(factId: number, hasRead: boolean): void {
  try {
    localStorage.setItem(ARCHIVE_KEY_PREFIX + factId, JSON.stringify({ hasRead }));
  } catch (error) {
    console.error('Failed to save archive fact:', error);
  }
}
