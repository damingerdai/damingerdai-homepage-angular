import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { BlogLinkComponent } from './blog-link/blog-link.component';
import { DividerComponent } from './divider/divider.component';
import { HeaderComponent } from './header/header.component';
import { LanguageAndToolsComponent } from './language-and-tools/language-and-tools.component';
import { LayoutComponent } from './layout/layout.component';
import { MyGithubStatsComponent } from './my-github-stats/my-github-stats.component';
import { MyMostUsedLanguagesComponent } from './my-most-used-languages/my-most-used-languages.component';
import { MyOpenSourceComponent } from './my-open-source/my-open-source.component';
import { ReadmeComponent } from './readme/readme.component';
import { TitleComponent } from './title/title.component';
import { TopImageComponent } from './top-image/top-image.component';

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
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ...standaloneComponents
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
