import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseCard } from 'src/app/shared/models/course-card.interface';
import { CoursesService } from 'src/app/shared/services/courses.service';


@Component({
  selector: 'app-courses-detail-page',
  templateUrl: './courses-detail-page.component.html',
  styleUrls: ['./courses-detail-page.component.scss'],
})
export class CoursesDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    // !!! Вынеси логику ниже в отдельный метод и вызови здесь
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.course = this.coursesService.getCourseBySlug(slug);
    } else {
      this.course = undefined;
    }
  }

  course: CourseCard | undefined
}
