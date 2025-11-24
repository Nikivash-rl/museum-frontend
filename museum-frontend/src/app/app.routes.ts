import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadComponent: () =>
      import('./components/home.component')
      .then(m => m.HomeComponent) },

  {
    path: 'tournament/:id',
    loadComponent: () =>
      import('./components/tournament-detail.component')
        .then(m => m.TournamentDetailComponent)
  },

  {
    path: 'tickets',
    loadComponent: () =>
      import('./components/tickets.component')
        .then(m => m.TicketsComponent)
  }

];
