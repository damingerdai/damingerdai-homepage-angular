import { Component } from '@angular/core';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
