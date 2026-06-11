import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider';

@Component({
  selector: 'app-my-open-source',
  imports: [DividerComponent, NgOptimizedImage],
  templateUrl: './my-open-source.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./my-open-source.css'],
})
export class MyOpenSourceComponent {
  protected images = [
    {
      url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=hoteler',
      alt: 'hoteler',
    },
    {
      url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=health-master',
      alt: 'health-master',
    },
    {
      url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=dotfile',
      alt: 'damingerdai-dotfile',
    },
  ];
}
