import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

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
    `,
  ],
})
export class EventDetailsComponents implements OnInit {
  event: any;

  constructor(private eventsService: EventService) {}

  ngOnInit() {
    this.event = this.eventsService.getEvent(1);
  }
}
