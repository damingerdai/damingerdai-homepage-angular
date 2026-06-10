import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';

@Component({
    selector: 'app-navbar',
    imports: [ThemeToggleButtonComponent],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
