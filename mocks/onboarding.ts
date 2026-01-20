export const memberOnboarding = {
  completedCount: 4,
  totalCount: 6,
  steps: [
    { id: 'profile', label: 'Profile setup', status: 'completed' as const },
    { id: 'id', label: 'ID verification', status: 'completed' as const },
    { id: 'policy', label: 'Company policy', status: 'completed' as const },
    { id: 'tax', label: 'Tax information', status: 'pending' as const },
    { id: 'emergency', label: 'Emergency contact', status: 'pending' as const },
  ],
};
