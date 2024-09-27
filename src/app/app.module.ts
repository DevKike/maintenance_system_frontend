import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengSidebarModule } from './components/primeng-sidebar/primeng-sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RegisterActorsComponent } from './components/register-actors/register-actors.component';
import { RegisterActorsModule } from './components/register-actors/register-actors.module';

@NgModule({
  declarations: [AppComponent, UsersComponent, SettingsComponent, ReportsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengSidebarModule,
    HeaderModule,
    DashboardModule,
    RegisterActorsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
