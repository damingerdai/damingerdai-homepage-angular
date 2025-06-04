import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-github-stats',
    imports: [DividerComponent, NgOptimizedImage],
    templateUrl: './my-github-stats.component.html',
    styleUrls: ['./my-github-stats.component.css']
})
export class MyGithubStatsComponent {

}
