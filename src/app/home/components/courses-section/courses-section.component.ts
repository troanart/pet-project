import { Component, OnInit } from '@angular/core';
import { CourseCard } from 'src/app/shared/models/course-card.interface';
import { CoursesService } from 'src/app/shared/services/courses.service';


@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
})
export class CoursesSectionComponent implements OnInit {
  courses: CourseCard[] = [];
  constructor(private coursesService: CoursesService) {
   
  }
  
  ngOnInit(): void {
      this.courses = this.coursesService.getCourses();
  }


  coursesButtonRouterLink: string = '/courses';
  coursesButtonText: string = 'View all courses';



  
}
