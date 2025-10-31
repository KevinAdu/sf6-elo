import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  calculateBO3Probability,
  calculateBO5Probability,
  calculateWinProbability,
  formatPercent
} from '../utils/eloProbabilities';
import './EloCalculator.css';

function calculateProbabilities(userElo, opponentElo) {
  const winProbability = calculateWinProbability(opponentElo, userElo);
  const bo3Probability = calculateBO3Probability(winProbability);
  const bo5Probability = calculateBO5Probability(winProbability);

  return { winProbability, bo3Probability, bo5Probability };
}

export default function EloWinProbabilityCalculator() {
  const [userElo, setUserElo] = useState(1500);
  const [opponentElo, setOpponentElo] = useState(1500);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['eloCalc', userElo, opponentElo],
    queryFn: async () => calculateProbabilities(userElo, opponentElo),
    staleTime: Infinity,
    suspense: true
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="elo-calculator">
      <h3>Elo Rating Calculator</h3>

      <form className="elo-form" id="eloForm">
        <label htmlFor="user-elo">Your Elo Rating:</label>
        <input
          type="number"
          name="user-elo"
          step="1"
          required
          value={userElo}
          onChange={(e) => setUserElo(Number(e.target.value))}
        />
        <label htmlFor="opponent-elo">Opponent's Elo Rating:</label>
        <input
          type="number"
          name="opponent-elo"
          step="1"
          required
          value={opponentElo}
          onChange={(e) => setOpponentElo(Number(e.target.value))}
        />
      </form>
      <h4>Probability of winning a single game</h4>
      <p id="winPercentage">{formatPercent(data.winProbability)}</p>
      <h4>Probability of winning a BO3 match</h4>
      <p id="bo3WinPercentage">{formatPercent(data.bo3Probability)}</p>
      <h4>Probability of winning a BO5 match</h4>
      <p id="bo5WinPercentage">{formatPercent(data.bo5Probability)}</p>
    </div>
  );
}
