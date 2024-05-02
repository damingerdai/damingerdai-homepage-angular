import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('out', style({ opacity: 1, transition: 'translateY(0)' })),
      transition('in => out', animate('200ms ease-out')),
    ]),
  ],
})
export class ThemeToggleButtonComponent {
  public fadeState = 'out';
  public isDark = false;

  public toogleTheme() {
    this.fadeState = 'in';
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.document.body.classList.remove('light');
      this.document.body.classList.add('dark');
      this.document.documentElement.classList.remove('light');
      this.document.documentElement.classList.add('dark');
      this.document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      this.document.body.classList.add('light');
      this.document.body.classList.remove('dark');
      this.document.documentElement.classList.remove('dark');
      this.document.documentElement.classList.add('light');
      this.document.documentElement.style.setProperty('color-scheme', 'light');
    }
    setTimeout(() => (this.fadeState = 'out'), 200);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.fadeState = 'in';
    setTimeout(() => (this.fadeState = 'out'), 200);
  }
}
