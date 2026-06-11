import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-top-image',
  imports: [NgOptimizedImage],
  templateUrl: './top-image.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./top-image.css'],
})
export class TopImageComponent {}
