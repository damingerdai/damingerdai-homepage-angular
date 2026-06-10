import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
    selector: 'app-top-image',
    imports: [NgOptimizedImage],
    templateUrl: './top-image.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./top-image.component.css']
})
export class TopImageComponent {

}
