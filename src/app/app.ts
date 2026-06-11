import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AboutMeComponent } from './about-me/about-me';
import { BlogLinkComponent } from './blog-link/blog-link';
import { DividerComponent } from './divider/divider';
import { HeaderComponent } from './header/header';
import { LanguageAndToolsComponent } from './language-and-tools/language-and-tools';
import { LayoutComponent } from './layout/layout';
import { MyGithubStatsComponent } from './my-github-stats/my-github-stats';
import { MyMostUsedLanguagesComponent } from './my-most-used-languages/my-most-used-languages';
import { MyOpenSourceComponent } from './my-open-source/my-open-source';
import { ReadmeComponent } from './readme/readme';
import { TitleComponent } from './title/title';
import { TopImageComponent } from './top-image/top-image';
import { NavbarComponent } from './navbar/navbar';

const standaloneComponents = [
  AboutMeComponent,
  BlogLinkComponent,
  DividerComponent,
  HeaderComponent,
  LanguageAndToolsComponent,
  LayoutComponent,
  MyGithubStatsComponent,
  MyMostUsedLanguagesComponent,
  MyOpenSourceComponent,
  ReadmeComponent,
  TitleComponent,
  TopImageComponent,
  NavbarComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...standaloneComponents],
})
export class AppComponent {
  title = 'damingerdai-homepage';
}
