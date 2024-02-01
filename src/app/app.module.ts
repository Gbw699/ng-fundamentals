import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponents,
  CreateEventComponent,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, IToastr } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

declare let toastr: IToastr

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponents,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  return true;
}
