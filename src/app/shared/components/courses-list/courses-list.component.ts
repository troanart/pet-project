import { Component, Input } from '@angular/core';
import { CourseCard } from '../../models/course-card.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: CourseCard[] = [];
  @Input() columns: 2 | 3 = 2;
  @Input() quantityCards: number = 0;

  get gridTemplateColumns(): string {
    return `repeat(${this.columns}, 1fr)`;
  }

  get coursesToShow(): CourseCard[]  {
    return this.courses.slice(0, this.quantityCards);
  }
}
