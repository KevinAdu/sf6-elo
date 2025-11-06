import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import './EloCalculator.css';
import EloWinProbabilityCalculator from './EloWinProbabilityCalculator';

export default function EloQueryClientProvider() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Calculating…</div>}>
        <EloWinProbabilityCalculator />
      </Suspense>
    </QueryClientProvider>
  );
}
