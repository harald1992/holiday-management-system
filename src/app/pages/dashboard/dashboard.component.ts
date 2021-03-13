import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardItems = [{ name: 'Ruben' }, { name: 'Sjim' }, { name: 'Dave' }];

  constructor() {}

  ngOnInit(): void {}
}
