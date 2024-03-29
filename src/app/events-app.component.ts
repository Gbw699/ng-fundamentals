import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkAuthenticationSatus();
  }
}
