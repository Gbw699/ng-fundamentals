import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';
import { NgModelGroup } from '@angular/forms';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent;
  isDirty = true;

  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues): void {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
