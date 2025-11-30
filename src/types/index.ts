export interface Fact {
  id: number;
  fact: string; // The main "TIL" statement
  category: 'Science' | 'Technology' | 'Human Body' | 'History' | 'Animals' | 'Space' | 'Nature' | 'Food' | 'Physics' | 'Earth';
  difficulty: 'easy' | 'medium' | 'hard';
  
  // Progressive explanations
  explanationSimple: string;      // Age 5-8
  explanationDetailed: string;    // Age 10-12
  explanationScientific: string;  // Age 13+
  
  // Additional engagement
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
  
  // Optional visual
  hasVisual?: boolean;
}

export interface GameState {
  targetFact: Fact | null;
  hasRead: boolean;
  currentStreak: number;
  maxStreak: number;
  factsRead: number;
  lastReadDate: string;
  favoriteFacts: number[]; // Array of fact IDs
}

export interface Stats {
  factsRead: number;
  currentStreak: number;
  maxStreak: number;
  favoriteFacts: number[];
}
