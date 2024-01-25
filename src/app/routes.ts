import { Routes } from '@angular/router';
import {
  EventDetailsComponents,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivator,
  CreateSessionComponent,
} from './events/index';
import { Error404Component } from './error/404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:id',
    component: EventDetailsComponents,
    canActivate: [EventRouteActivator],
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
