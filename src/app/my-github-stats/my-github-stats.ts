import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider';

@Component({
  selector: 'app-my-github-stats',
  imports: [DividerComponent, NgOptimizedImage],
  templateUrl: './my-github-stats.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./my-github-stats.css'],
})
export class MyGithubStatsComponent {}
