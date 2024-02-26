import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { Observable } from 'rxjs';
import { IEvent } from './shared';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params['id']);
  }
}
