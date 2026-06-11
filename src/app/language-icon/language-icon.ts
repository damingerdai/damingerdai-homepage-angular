import { NgOptimizedImage } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-language-icon',
  imports: [NgOptimizedImage],
  templateUrl: './language-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./language-icon.css'],
})
export class LanguageIconComponent {
  @Input()
  public name!: string;

  @Input()
  public alt!: string;

  public get url() {
    return `../../assets/${this.name}.svg`;
  }
}
