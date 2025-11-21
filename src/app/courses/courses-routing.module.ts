import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoursesDetailPageComponent } from './courses-detail-page/courses-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  },
  {
    path: ':slug', 
    component: CoursesDetailPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
