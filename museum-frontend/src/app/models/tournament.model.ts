export interface Tournament {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate?: string;
  winnerTeam: string;
  prizePool?: number;
  tier?: 'MAJOR' | 'S-TIER' | 'A-TIER';
  game?: 'CS:GO' | 'CS2';
  prizePoolUsd?: number;
  description?: string;
  organizer?: string;
  venue?: string;

  teamsTop4?: string[];
  mvp?: string;
  mapPool?: string[];
  eventImageUrl?: string;


}
