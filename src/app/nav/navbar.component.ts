import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, IEvent, ISession } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      li > a.active {
        color: #f97924;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  events: IEvent[];

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}
