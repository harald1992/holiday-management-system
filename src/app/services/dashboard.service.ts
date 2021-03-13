import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";

export interface DashBoardItem {
  name: string;
  holidayDaysRemaining: number;
}

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // tslint:disable-next-line: no-console
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // tslint:disable-next-line: no-console
      console.error(`Backend returned code ${error.status}`);
    }
    // return an data object to generate a user-facing error message
    return throwError(error);
  }

  getDashboardOverview() {
    return this.http
      .get<any>(`${environment.services.dashboard}/overview`)
      .pipe(catchError(this.handleError));
  }
}
