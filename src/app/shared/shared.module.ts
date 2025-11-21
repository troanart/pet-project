import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckListComponent } from './components/check-list/check-list.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsCardComponent } from './components/events-card/events-card.component';




@NgModule({
  declarations: [
    CheckListComponent,
    ButtonComponentComponent,
    CourseCardComponent,
    CoursesListComponent,
    EventsListComponent,
    EventsCardComponent,
    
  ],
  imports: [CommonModule, RouterModule],
  exports: [CheckListComponent, ButtonComponentComponent, CourseCardComponent, CoursesListComponent, EventsCardComponent, EventsListComponent],
})
export class SharedModule {}
