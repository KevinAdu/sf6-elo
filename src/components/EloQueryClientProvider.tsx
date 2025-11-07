import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import EloWinProbabilityCalculator from './EloWinProbabilityCalculator';

const queryClient = new QueryClient();

export default function EloQueryClientProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Calculating…</div>}>
        <EloWinProbabilityCalculator />
      </Suspense>
    </QueryClientProvider>
  );
}
