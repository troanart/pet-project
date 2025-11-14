import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'courses',
  //   loadChildren: () =>
  //     import('./courses/courses.module').then((m) => m.CoursesModule), // TODO: add courses module
  // },
  // {
  //   path: 'events',
  //   loadChildren: () =>
  //     import('./events/events.module').then((m) => m.EventsModule), // TODO: add events module
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule), // TODO: add blog module
  // },
  // {
  //   path: 'contacts',
  //   loadChildren: () =>
  //     import('./contacts/contacts.module').then((m) => m.ContactsModule), // TODO: add contacts module
  // },
  // {
  //   path: 'about-us',
  //   loadChildren: () =>
  //     import('./about-us/about-us.module').then((m) => m.ContactsModule), // TODO: add contacts module
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
