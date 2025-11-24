import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  isMenuOpen = false;
  isAuthenticated = false;

  navItems = [
    { label: 'Tickets', path: '/tickets' },
    { label: 'Geplante Turniere', path: '/schedule' }
  ];

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }
  toggleAuth() { this.isAuthenticated = !this.isAuthenticated; }
}
