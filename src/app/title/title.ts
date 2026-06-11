import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./title.css'],
})
export class TitleComponent {}
