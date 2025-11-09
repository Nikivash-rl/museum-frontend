export interface Tournament {
  id: string;
  name: string;
  location: string;
  startDate: string;      // ISO-строка: '2024-03-31'
  endDate?: string;
  winnerTeam: string;
  prizePool?: number;
  tier?: 'MAJOR' | 'S-TIER' | 'A-TIER';
  game?: 'CS:GO' | 'CS2';
}
