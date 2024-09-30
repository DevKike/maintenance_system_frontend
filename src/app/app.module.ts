import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengSidebarModule } from './shared/components/primeng-sidebar/primeng-sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './shared/components/header/header.module';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { DashboardModule } from './shared/components/dashboard/dashboard.module';
import { RegisterActorsComponent } from './pages/register-actors/register-actors.component';
import { RegisterActorsModule } from './pages/register-actors/register-actors.module';

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
