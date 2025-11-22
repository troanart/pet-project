import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsDetailPageComponent } from './events-detail-page/events-detail-page.component';
const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
  },

  {
    path: ':slug',
    component: EventsDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
