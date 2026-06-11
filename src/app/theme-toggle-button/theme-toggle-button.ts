import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

import {
  Component,
  Inject,
  DOCUMENT,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-theme-toggle-button',
  imports: [IconsModule],
  templateUrl: './theme-toggle-button.html',
  styleUrl: './theme-toggle-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleButtonComponent {
  public fadeState = 'out';
  public isDark = signal(false);

  public toogleTheme() {
    this.isDark.update((dark) => !dark);
    const isDarkValue = this.isDark();

    const targetEl = this.document.documentElement;
    const bodyEl = this.document.body;

    if (isDarkValue) {
      bodyEl.classList.remove('light');
      bodyEl.classList.add('dark');
      targetEl.classList.remove('light');
      targetEl.classList.add('dark');
      targetEl.style.setProperty('color-scheme', 'dark');
    } else {
      bodyEl.classList.add('light');
      bodyEl.classList.remove('dark');
      targetEl.classList.remove('dark');
      targetEl.classList.add('light');
      targetEl.style.setProperty('color-scheme', 'light');
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.fadeState = 'in';
    setTimeout(() => (this.fadeState = 'out'), 200);
  }
}
