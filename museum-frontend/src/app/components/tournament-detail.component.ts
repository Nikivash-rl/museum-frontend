import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AsyncPipe, DatePipe, NgIf, NgForOf, DecimalPipe} from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [NgIf, NgForOf, AsyncPipe, DatePipe, DecimalPipe],
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent {
  tournament$: Observable<Tournament | null>;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
  ) {
    this.tournament$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') ?? '';
        return this.tournamentService.getTournamentById(id);
      })
    );
  }
}
