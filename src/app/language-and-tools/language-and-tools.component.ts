import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageIconComponent } from '../language-icon/language-icon.component';

@Component({
  selector: 'app-language-and-tools',
  standalone: true,
  imports: [CommonModule, LanguageIconComponent],
  templateUrl: './language-and-tools.component.html',
  styleUrls: ['./language-and-tools.component.css']
})
export class LanguageAndToolsComponent {

  protected languages = [
    {
      name: "angular",
      alt: "angular",
    },
    {
      name: "react",
      alt: "react",
    },
    {
      name: "golang",
      alt: "golang",
    },
    {
      name: "javascript",
      alt: "javascript",
    },
    {
      name: "java",
      alt: "java",
    },
    {
      name: "springboot",
      alt: "sprint boot",
    },
    {
      name: "nodejs",
      alt: "nodejs",
    },
    {
      name: "docker",
      alt: "docker",
    },
    {
      name: "kubernetes",
      alt: "kubernetes",
    },
    {
      name: "nextjs",
      alt: "nextjs",
    },
  ];
}
