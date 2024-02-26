import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: , 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponents implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventsService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventsService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}
