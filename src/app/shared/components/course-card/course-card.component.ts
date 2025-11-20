import { Component, Input } from '@angular/core';
import { CourseCard } from '../../models/course-card.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() courseCard: CourseCard = {
    id: 0,
    title: '',
    category: '',
    badgeColor: '',
    image: '',
    price: 0,
    author: '',
    routerLink: '',
  };

  badgeColor: string = '';

  colors = [
    {
      Marketing: ' #03CEA4'
    },
    {
      Management: '#5A87FC'
    },
    {
      HR: '#F89828'
    },
  ];
}
