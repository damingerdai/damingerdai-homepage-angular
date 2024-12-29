import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-open-source',
    imports: [CommonModule, DividerComponent, NgOptimizedImage],
    templateUrl: './my-open-source.component.html',
    styleUrls: ['./my-open-source.component.css']
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
    }
  ]
}
