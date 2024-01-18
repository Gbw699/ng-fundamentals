import { Routes } from '@angular/router';
import { EventDetailsComponents } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponents },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
