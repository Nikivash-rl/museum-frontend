import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TournamentService} from '../services/tournament.service';
import {AppHeaderComponent} from '../tempaltes/app-header.component';
import { Tournament } from '../models/tournament.model';
import { TournamentYearGroup} from '../models/tournament-year-group.model';
import {NgFor, NgIf, DatePipe, NgForOf} from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [ DatePipe, NgForOf, AppHeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  currentTournament: Tournament | null = null;
  tournamentYearGroups: TournamentYearGroup[] = [];

  // Параметры для страниц по 3 года
  readonly minYear = 2012;
  readonly maxYear = 2025;
  readonly yearsPerPage = 3;
  yearPageIndex = 0; // 0-я страница: самые новые 3 года

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.tournamentService.getCurrentTournament()
      .subscribe(t => (this.currentTournament = t));

    this.tournamentService.getTournamentsGroupedByYear()
      .subscribe(groups => {
        // Можно сразу отфильтровать по диапазону 2012–2025
        this.tournamentYearGroups = groups.filter(
          g => g.year >= this.minYear && g.year <= this.maxYear
        );
      });
  }

  get totalYearPages(): number {
    if (this.tournamentYearGroups.length === 0) {
      return 0;
    }
    return Math.ceil(this.tournamentYearGroups.length / this.yearsPerPage);
  }

  get visibleYearGroups(): TournamentYearGroup[] {
    const start = this.yearPageIndex * this.yearsPerPage;
    const end = start + this.yearsPerPage;
    return this.tournamentYearGroups.slice(start, end);
  }

  nextYearPage(): void {
    if (this.yearPageIndex < this.totalYearPages - 1) {
      this.yearPageIndex++;
    }
  }

  prevYearPage(): void {
    if (this.yearPageIndex > 0) {
      this.yearPageIndex--;
    }
  }

  // Прокрутка ленты турниров внутри года (горизонтально)
  scrollRowLeft(container: HTMLDivElement): void {
    container.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRowRight(container: HTMLDivElement): void {
    container.scrollBy({ left: 600, behavior: 'smooth' });
  }
}
