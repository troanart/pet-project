import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  aboutButtonRouterLink: string = '/about-us';
  aboutButtonText: string = 'About us';
  coursesButtonRouterLink: string = '/courses';
  coursesButtonText: string = 'Explore courses';
}
