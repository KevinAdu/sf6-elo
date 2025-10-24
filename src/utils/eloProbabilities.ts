export const eloProbabilities = [
  { diff: 800, prob: 0.0099 },
  { diff: 750, prob: 0.0132 },
  { diff: 700, prob: 0.0175 },
  { diff: 650, prob: 0.0232 },
  { diff: 600, prob: 0.0307 },
  { diff: 550, prob: 0.0405 },
  { diff: 500, prob: 0.0532 },
  { diff: 450, prob: 0.0698 },
  { diff: 400, prob: 0.0909 },
  { diff: 350, prob: 0.1177 },
  { diff: 300, prob: 0.1510 },
  { diff: 250, prob: 0.1917 },
  { diff: 200, prob: 0.2403 },
  { diff: 150, prob: 0.2966 },
  { diff: 100, prob: 0.3599 },
  { diff: 50, prob: 0.4285 },
  { diff: 0, prob: 0.5 },
  { diff: -50, prob: 0.5715 },
  { diff: -100, prob: 0.6401 },
  { diff: -150, prob: 0.7034 },
  { diff: -200, prob: 0.7597 },
  { diff: -250, prob: 0.8083 },
  { diff: -300, prob: 0.8490 },
  { diff: -350, prob: 0.8823 },
  { diff: -400, prob: 0.9091 },
  { diff: -450, prob: 0.9302 },
  { diff: -500, prob: 0.9468 },
  { diff: -550, prob: 0.9595 },
  { diff: -600, prob: 0.9693 },
  { diff: -650, prob: 0.9768 },
  { diff: -700, prob: 0.9825 },
  { diff: -750, prob: 0.9868 },
  { diff: -800, prob: 0.9901 },
];

export function formatPercent(prob: number): string {
  return (prob * 100).toFixed(2) + '%';
}

export function getProbability(diff: number): number | null {
  const entry = eloProbabilities.find(e => e.diff === diff);
  return entry ? entry.prob : null;
}

export function getClosestProbability(diff: number): number {
  let closest = eloProbabilities[0];
  for (const entry of eloProbabilities) {
    if (Math.abs(entry.diff - diff) < Math.abs(closest.diff - diff)) {
      closest = entry;
    }
  }
  return closest.prob;
}

export function calculateWinProbability(opponentRating: number, playerRating: number): number {
  return 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
}

export function calculateBO3Probability(winProbability: number): number {
  return winProbability * winProbability * (3 - 2 * winProbability);
}

export function calculateBO5Probability(winProbability: number): number  {
  return Math.pow(winProbability, 3) * (1 + 3 * (1 - winProbability) + 6 * Math.pow(1 - winProbability, 2));
}