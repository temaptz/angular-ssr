import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/async">Async data</a>
  <a routerLink="/meta">Dynamic metadata</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
