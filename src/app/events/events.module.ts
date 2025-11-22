import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsDetailPageComponent } from './events-detail-page/events-detail-page.component';


@NgModule({
  declarations: [
    EventsPageComponent,
    EventsDetailPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
