import { Component, OnInit } from "@angular/core";

import {
  DashBoardItem,
  DashboardService,
} from "../../services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  dashboardItems: DashBoardItem[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardOverview().subscribe(
      (result) => {
        this.dashboardItems = result;
      },
      (error) => {
        // return mockdata
        const dashboardItems: DashBoardItem[] = [
          { name: "Ruben", holidayDaysRemaining: 16 },
          { name: "Sjim", holidayDaysRemaining: -2 },
          { name: "Dave", holidayDaysRemaining: 18 },
        ];

        this.dashboardItems = dashboardItems;
      }
    );
  }
}
