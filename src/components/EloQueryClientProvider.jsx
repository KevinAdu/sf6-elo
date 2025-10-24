
import './EloCalculator.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EloWinProbabilityCalculator from './EloWinProbabilityCalculator';


export default function EloQueryClientProvider() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <EloWinProbabilityCalculator  />
    </QueryClientProvider>
  )
}
