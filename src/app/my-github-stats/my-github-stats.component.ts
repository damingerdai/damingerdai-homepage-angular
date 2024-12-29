import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-github-stats',
    imports: [CommonModule, DividerComponent, NgOptimizedImage],
    templateUrl: './my-github-stats.component.html',
    styleUrls: ['./my-github-stats.component.css']
})
export class MyGithubStatsComponent {

}
