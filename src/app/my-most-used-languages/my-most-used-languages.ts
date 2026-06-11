import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DividerComponent } from '../divider/divider';

@Component({
  selector: 'app-my-most-used-languages',
  imports: [DividerComponent, NgOptimizedImage],
  templateUrl: './my-most-used-languages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./my-most-used-languages.css'],
})
export class MyMostUsedLanguagesComponent {}
