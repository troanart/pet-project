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

  statsList = [
    {
      title: 'Students graduated',
      counter: 1200,
    },
    {
      title: 'Completed courses',
      counter: 84,
    },
    {
      title: 'Qualified tutors',
      counter: 16,
    },
    {
      title: 'Years of experience',
      counter: 5,
    },
  ];
}
