import {Tournament} from './tournament.model';

export interface TournamentYearGroup {
  year: number;
  tournaments: Tournament[];
}
