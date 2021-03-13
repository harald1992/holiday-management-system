import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DashboardItemComponent } from "./pages/dashboard/dashboard-item/dashboard-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DashboardComponent, DashboardItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
