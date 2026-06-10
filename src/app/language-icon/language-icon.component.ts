import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-language-icon',
    imports: [NgOptimizedImage],
    templateUrl: './language-icon.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
