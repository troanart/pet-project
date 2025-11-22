import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  aboutButtonRouterLink: string = '/about-us';  // статические даные. см. events-card.component строка 15
  aboutButtonText: string = 'About us';  // статические даные. см. events-card.component строка 15
  coursesButtonRouterLink: string = '/courses';  // статические даные. см. events-card.component строка 15
  coursesButtonText: string = 'Explore courses';  // статические даные. см. events-card.component строка 15

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
