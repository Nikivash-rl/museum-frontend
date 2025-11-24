import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tournament } from '../models/tournament.model';
import { TournamentYearGroup } from '../models/tournament-year-group.model';
import { MOCK_TOURNAMENTS } from '../mock/tournaments.mock';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private readonly tournaments: Tournament[] = MOCK_TOURNAMENTS;

  constructor() {}

  getAllTournaments(): Observable<Tournament[]> {
    return of(this.tournaments);
  }

  getCurrentTournament(): Observable<Tournament | null> {
    return this.getAllTournaments().pipe(
      map(list =>
        [...list]
          .sort((a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )[0] ?? null
      )
    );
  }

  getTournamentById(id: string): Observable<Tournament | null> {
    return this.getAllTournaments().pipe(
      map(list => list.find(t => t.id === id) ?? null)
    );
  }

  getTournamentsGroupedByYear(): Observable<TournamentYearGroup[]> {
    return this.getAllTournaments().pipe(
      map(list => {
        const sorted = [...list].sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );

        const mapByYear = new Map<number, Tournament[]>();

        for (const t of sorted) {
          const year = new Date(t.startDate).getFullYear();
          if (!mapByYear.has(year)) {
            mapByYear.set(year, []);
          }
          mapByYear.get(year)!.push(t);
        }

        return Array.from(mapByYear.entries())
          .map(([year, tournaments]) => ({ year, tournaments }))
          .sort((a, b) => b.year - a.year);
      })
    );
  }
}
