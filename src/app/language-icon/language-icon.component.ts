import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-language-icon',
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './language-icon.component.html',
    styleUrls: ['./language-icon.component.css']
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
