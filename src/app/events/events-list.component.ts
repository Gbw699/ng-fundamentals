import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventsService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }
}
