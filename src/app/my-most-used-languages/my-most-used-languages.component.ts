import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-most-used-languages',
    imports: [CommonModule, DividerComponent, NgOptimizedImage],
    templateUrl: './my-most-used-languages.component.html',
    styleUrls: ['./my-most-used-languages.component.css']
})
export class MyMostUsedLanguagesComponent {

}
