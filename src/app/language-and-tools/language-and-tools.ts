import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LanguageIconComponent } from '../language-icon/language-icon';

@Component({
  selector: 'app-language-and-tools',
  imports: [LanguageIconComponent],
  templateUrl: './language-and-tools.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./language-and-tools.css'],
})
export class LanguageAndToolsComponent {
  protected languages = [
    {
      name: 'angular',
      alt: 'angular',
    },
    {
      name: 'react',
      alt: 'react',
    },
    {
      name: 'golang',
      alt: 'golang',
    },
    {
      name: 'javascript',
      alt: 'javascript',
    },
    {
      name: 'java',
      alt: 'java',
    },
    {
      name: 'springboot',
      alt: 'sprint boot',
    },
    {
      name: 'nodejs',
      alt: 'nodejs',
    },
    {
      name: 'docker',
      alt: 'docker',
    },
    {
      name: 'kubernetes',
      alt: 'kubernetes',
    },
    {
      name: 'nextjs',
      alt: 'nextjs',
    },
  ];
}
