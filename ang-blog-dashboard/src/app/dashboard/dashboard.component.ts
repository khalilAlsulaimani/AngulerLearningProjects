import { Component } from '@angular/core';
import { faCoffee, faList, faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  faCoffee = faListUl;
}
