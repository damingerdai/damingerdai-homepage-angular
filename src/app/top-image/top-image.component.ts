import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-top-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.css']
})
export class TopImageComponent {

}
