import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-PEQV4VLYTY';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track fact views
export const trackFactView = (factTitle: string, category: string) => {
  ReactGA.event({
    category: 'Content',
    action: 'fact_viewed',
    label: `${category}: ${factTitle}`,
  });
};

// Track explanation level changes
export const trackExplanationLevel = (level: string) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'explanation_level_changed',
    label: level,
  });
};

// Track share
export const trackShare = (factTitle: string) => {
  ReactGA.event({
    category: 'Social',
    action: 'fact_shared',
    label: factTitle,
  });
};

// Track archive views
export const trackArchiveView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'archive_viewed',
  });
};

// Track archive fact access
export const trackArchiveFact = (factNumber: number) => {
  ReactGA.event({
    category: 'Content',
    action: 'archive_fact_accessed',
    value: factNumber,
  });
};

