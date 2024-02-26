import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { Observable } from 'rxjs';
import { IEvent } from './shared';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }
}
