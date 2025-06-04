import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
    selector: 'app-my-most-used-languages',
    imports: [DividerComponent, NgOptimizedImage],
    templateUrl: './my-most-used-languages.component.html',
    styleUrls: ['./my-most-used-languages.component.css']
})
export class MyMostUsedLanguagesComponent {

}
