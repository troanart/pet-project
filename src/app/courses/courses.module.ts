import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoursesDetailPageComponent } from './courses-detail-page/courses-detail-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CoursesPageComponent, CoursesDetailPageComponent],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
