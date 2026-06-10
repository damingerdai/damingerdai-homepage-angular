import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-github-stats',
    imports: [DividerComponent, NgOptimizedImage],
    templateUrl: './my-github-stats.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./my-github-stats.component.css']
})
export class MyGithubStatsComponent {

}
