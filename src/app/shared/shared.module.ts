import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckListComponent } from './components/check-list/check-list.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CategoryClassPipe } from './pipes/category-class.pipe';



@NgModule({
  declarations: [
    CheckListComponent,
    ButtonComponentComponent,
    CourseCardComponent,
    CoursesListComponent,
    CategoryClassPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [CheckListComponent, ButtonComponentComponent, CourseCardComponent, CoursesListComponent],
})
export class SharedModule {}
