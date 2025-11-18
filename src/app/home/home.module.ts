import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
