import { Component } from '@angular/core';
import { getAllGames } from '../example-api';


@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-list';
  games = getAllGames();
}
