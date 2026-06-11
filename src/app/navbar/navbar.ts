import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleButtonComponent],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.css',
})
export class NavbarComponent {}
